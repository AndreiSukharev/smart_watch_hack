import {model, Schema} from 'mongoose';
import {EnumDeviceStatus} from "./types";
import {ICompanyDocument, ICompanyModel} from "../company/types";

const ObjectId = Schema.Types.ObjectId;

const DeviceSchema: Schema = new Schema({
    worker: {
        type: ObjectId,
        ref: 'Worker',
    },
    status: {
        type: String,
        enum: Object.values(EnumDeviceStatus),
        default: EnumDeviceStatus.disable
    },
    connectedAt: Date,
    activatedAt: Date,
    amountWatch: {
        type: Number,
        default: 0,
    },
    }, {timestamps: true}
);

const Device = model<ICompanyDocument, ICompanyModel>("Device", DeviceSchema);
export default Device;
