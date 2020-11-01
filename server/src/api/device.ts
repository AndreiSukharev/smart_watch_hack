import {IDeviceDocument} from "../../db/mongo/models/devices/types";
import Device from "../../db/mongo/models/devices/schema";

export const getDevice = async (_id: string) => {
    const errorMsg : string = 'Неправильные данные';
    const device : IDeviceDocument | null = await Device.findOne({_id});
    if (!device) {
        throw new Error(errorMsg);
    }
    // if (!await user.comparePasswords(phone)) {
    //     throw new Error(errorMsg);
    // }
    return device;
}

export const addDevice = async (args) => {
    const device : IDeviceDocument = await Device.create(args);
    return device;
}
