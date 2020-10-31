import {model, Schema} from 'mongoose';
import {ICompanyDocument, ICompanyModel} from "./types";

const CompanySchema: Schema = new Schema({
    name: String,
    director: {
        type: String,
        default: 'Стройнов Геннадий Иннокентьевич',
    },
    inn: {
        type: String,
        default: '9999000000',
    },
    address: {
        type: String,
        default: 'г.Москва, ул.Хакатоновская 30-09',
    },
    requisites: {
        type: String,
        default: 'счет: 300000000',
    },
    amountWorkers: {
        documented: {
            type: Number,
            default: 1,
        },
        fact: {
            type: Number,
            default: 1,
        },
        staff: {
            type: Number,
            default: 1,
        },
        naimix: {
            type: Number,
            default: 1,
        },
    }

    }, {timestamps: true}
);

const Company = model<ICompanyDocument, ICompanyModel>("Company", CompanySchema);
export default Company;
