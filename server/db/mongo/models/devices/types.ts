import {Document, Model} from "mongoose";

export enum EnumDeviceStatus {
    disable = "disable",
    active = "active",
    inwork = "inwork",
}

export interface IDevice {
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

export interface IDeviceDocument extends IDevice, Document {
}

export interface IDeviceModel extends Model<IDeviceDocument> {
}
