import {Document, Model} from "mongoose";

export interface IWatch {
    worker: {
        _id: string,
        name: string,
        position: string,
    },
    company: {
        _id: string,
        name: string,
    },
    startAt?: Date,
    finishAt?: Date,
}

export interface IWatchDocument extends IWatch, Document {
}

export interface IWatchModel extends Model<IWatchDocument> {
}
