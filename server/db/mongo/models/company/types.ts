import {Document, Model} from "mongoose";

export interface ICompany {
    name: string,
    password?: string,
    director?: string,
    inn?: string,
    address?: string,
    amountWorkers?: {
        documented: number,
        fact: number,
        staff: number,
        naimix: number,
    },
    createdAt?: Date,
}

export interface ICompanyDocument extends ICompany, Document {
}

export interface ICompanyModel extends Model<ICompanyDocument> {
}
