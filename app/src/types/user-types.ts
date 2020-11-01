import {EnumUserRoles, EnumUserStatus} from "../../../server/db/mongo/models/user/types";

export interface IUserLogin {
    login: string,
    password: string,
}

export interface IUser {
    role?: EnumUserRoles,
    status?: EnumUserStatus,
    company?: {
        _id: string,
        name: string,
    },
    email?: string,
    name?: string,
    password?: string,
    birth?: string,
    phone: string,
    inn?: string,
    citizenship?: string,
    device?: string,
    watch?: string,
    amountWatch?: number,
    position?: string,
    typeOfEmployment?: string,
    createdAt?: Date,
}

