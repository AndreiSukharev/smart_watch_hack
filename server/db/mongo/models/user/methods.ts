import { IUserDocument } from "./types";
import {compare} from "bcrypt";


export async function comparePasswords(this: IUserDocument, phone: string) : Promise<boolean> {
    return compare(phone, this.phone);
}
