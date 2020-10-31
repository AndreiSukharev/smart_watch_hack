import {Document, Model} from "mongoose";

export interface IDeviceData {
    device: string,
    accuracy: number,
    latitude: number,
    longitude: number,
    batteryCharge: number,
    createAt?: Date,
}

export interface IDeviceDataDocument extends IDeviceData, Document {
}

export interface IDeviceDataModel extends Model<IDeviceDataDocument> {
}
