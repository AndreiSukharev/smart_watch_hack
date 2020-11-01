import {IDeviceDataDocument} from "../../db/mongo/models/deviceData/types";
import DeviceData from "../../db/mongo/models/deviceData/schema";

export const sos = async (args) => {
    const data : IDeviceDataDocument = await DeviceData.create(args);
    return data;
}
