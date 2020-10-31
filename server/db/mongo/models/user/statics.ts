import { IUserModel } from "./types";

export async function isExist(this: IUserModel, option: Object) : Promise<boolean> {
    return await this.countDocuments(option) === 0;
}

