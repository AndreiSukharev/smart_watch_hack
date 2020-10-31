import {IUserDocument} from "../../db/mongo/models/user/types";
import User from "../../db/mongo/models/user/schema";

export const loginUser = async (phone: string) => {
    const errorMsg : string = 'Неправильные данные';
    const user : IUserDocument | null = await User.findOne({phone});
    if (!user) {
        throw new Error(errorMsg);
    }
    // if (!await user.comparePasswords(phone)) {
    //     throw new Error(errorMsg);
    // }
    return 'ok';
}

export const signUpUser = async (phone: string) => {
    const user : IUserDocument = await User.create({phone});
    return user;
}
