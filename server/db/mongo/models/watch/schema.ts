import {model, Schema} from 'mongoose';
import {ICompanyDocument, ICompanyModel} from "../company/types";

const ObjectId = Schema.Types.ObjectId;

const WatchSchema: Schema = new Schema({
    worker: {
        _id: ObjectId,
        name: String,
        position: String,
    },
    company: {
        _id: ObjectId,
        name: String,
    },
    startAt: Date,
    finishAt: Date,
    object: {
        type: ObjectId,
        ref: 'Object',
    },
    }, {timestamps: true}
);

const Watch = model<ICompanyDocument, ICompanyModel>("Watch", WatchSchema);
export default Watch;
