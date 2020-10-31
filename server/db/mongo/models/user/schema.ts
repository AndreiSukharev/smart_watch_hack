import {model, Schema} from 'mongoose';
import {EnumUserRoles, EnumUserStatus, IUserDocument, IUserModel} from "./types";
import {comparePasswords} from "./methods";
import {isExist} from "./statics";
import {hash} from "bcrypt";

const ObjectId = Schema.Types.ObjectId;

const UserSchema: Schema = new Schema({
    role: {
        type: String,
        enum: Object.values(EnumUserRoles),
        default: EnumUserRoles.worker,
    },
    status: {
        type: String,
        enum: Object.values(EnumUserStatus),
        default: EnumUserStatus.activated,
    },
    company: {
        _id: ObjectId,
        name: String,
    },
    name: {
        type: String,
        default: "Хакатонов Хакатон Хакатонович"
    },
    password: String,
    phone: {
        type: String,
        validate: {
            validator: async (phone: string) => await User.isExist({phone}),
            message: () => `Phone is already been used`,
        },
    },
    email: {
        type: String,
        validate: {
            validator: async (email: string) => await User.isExist({email}),
            message: () => `Email is already been used`,
        },
    },
    birth: {
        type: String,
        default: '01.01.1980',
    },
    passport: {
        type: String,
        default: 'Выдан ОУФМС РФ',
    },
    inn: {
        type: String,
        default: '9999000000',
    },
    citizenship: {
        type: String,
        default: 'Россия',
    },
    device: {
        type: ObjectId,
        ref: 'Device',
    },
    //watch = вахта
    watch: {
        type: ObjectId,
        ref: 'Watch',
    },
    amountWatch: {
        type: Number,
        default: 0,
    },
    position: {
        type: String,
        default: 'Монтер',
    },
    typeOfEmployment: {
        type: String,
        default: 'Полный рабочий день',
    },

    }, {timestamps: true}
);

UserSchema.pre<IUserDocument>("save", async function () {
    if (this.isModified('phone')) {
        this.phone = await hash(this.phone, 10);
    }
});

UserSchema.statics.isExist = isExist;
UserSchema.methods.comparePasswords = comparePasswords;

const User = model<IUserDocument, IUserModel>("User", UserSchema);
export default User;
// https://stackoverflow.com/questions/42448372/typescript-mongoose-static-model-method-property-does-not-exist-on-type
//Schema.methods.hashPassword = (password: string) => {
//     return security.pbkdf2Sync(password, this.salt, 10000, 64, 'SHA512').toString('base64');
// };
//
// Schema.methods.authenticate = (password: string) => {
//     return this.password === this.hashPassword(password);
// };
//
// Schema.pre('save', (next: express.NextFunction) => {
//      if (this.password) {
// 	    this.salt = new Buffer(security.randomBytes(16).toString('base64'), 'base64');
// 	    this.password = this.hashPassword(this.password);
//     }
//
//     next();
// });
