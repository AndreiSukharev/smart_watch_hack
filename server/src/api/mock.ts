import {EnumUserRoles, IUser, IUserDocument} from "../../db/mongo/models/user/types";
import User from "../../db/mongo/models/user/schema";
import Company from "../../db/mongo/models/company/schema";
import {ICompany, ICompanyDocument} from "../../db/mongo/models/company/types";

// function getRandomInt() : string {
//     const max = 89999999999;
//     const min = 89111111111;
//     return String(Math.random() * (max - min) + min);
// }

export const addMock = async () => {

    const companies : ICompanyDocument[] = await Company.insertMany(companiesMock);
    for (let i = 0; i < companies.length; i++) {
        usersMock[i].company._id = companies[i]._id;
        usersMock[i].company.name = companies[i].name;
    }
    const users : IUserDocument[] = await User.insertMany(usersMock);
    return users;
}

const companiesMock: ICompany[] = [
    {
        name: 'СтройИнновации',
    },
    {
        name: 'ПодрядПро',
    },
    {
        name: 'ИнноГарант',
    }
]

const usersMock: IUser[] = [
    {
        role: EnumUserRoles.worker,
        name: 'Олегов Олег Олегович',
        phone: '111',
    },
    {
        role: EnumUserRoles.worker,
        name: 'Артемов Артем Артемович',
        phone: '222',
    },
    {
        role: EnumUserRoles.worker,
        name: 'Андреев Андрей Андреевич',
        phone: '333',
    }
]
