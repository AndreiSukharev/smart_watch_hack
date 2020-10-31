import {model, Schema} from 'mongoose';
import {ICompanyDocument, ICompanyModel} from "../company/types";

const ObjectId = Schema.Types.ObjectId;

const DeviceDataSchema: Schema = new Schema({
    device: {
        type: ObjectId,
        ref: 'Device',
    },
    accuracy: Number,
    latitude: Number,
    longitude: Number,
    batteryCharge: Number,


    }, {timestamps: true}
);

const DeviceData = model<ICompanyDocument, ICompanyModel>("DeviceData", DeviceDataSchema);
export default DeviceData;
