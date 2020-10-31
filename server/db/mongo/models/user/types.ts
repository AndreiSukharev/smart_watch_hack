import {Document, Model} from 'mongoose';

export enum EnumUserRoles {
    admin = "admin",
    operator = "operator",
    worker = 'worker'
}

export enum EnumUserStatus {
    pending = "pending",
    activated = "activated",
    deactivated = "deactivated",
}

export interface IUser {
    role?: EnumUserRoles,
    status?: EnumUserStatus,
    company?: {
        _id: string,
        name: string,
    },
    email?: string,
    name?: string,
    password?: string,
    birth?: string,
    phone: string,
    inn?: string,
    citizenship?: string,
    device?: string,
    watch?: string,
    amountWatch?: number,
    position?: string,
    typeOfEmployment?: string,
    createdAt?: Date,
}

// methods
export interface IUserDocument extends IUser, Document {
    comparePasswords(this: IUserDocument, phone: string): Promise<boolean>;
}

// static
export interface IUserModel extends Model<IUserDocument> {
    isExist(this: IUserModel, option: Object): Promise<boolean>;
}
