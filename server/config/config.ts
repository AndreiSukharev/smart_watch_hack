import dotenv from "dotenv";
import {NodeEnvTypes} from "./nodeEnvTypes";

dotenv.config();

export default {
    env: process.env.NODE_ENV!,
    port: process.env.SERVER_PORT!,
    mongoUri: process.env.MONGO_URI!,
    inProd: process.env.NODE_ENV! === NodeEnvTypes.PROD,
    tokenSecret: process.env.TOKEN_SECRET,
};

