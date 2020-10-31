process.on('uncaughtException', (err) => {
    console.log(err);
});

process.on('unhandledRejection', function(reason, p){
    console.log(reason, p);
});

import express from 'express';
import cors from 'cors';
import compression from "compression";
import dotenv from "dotenv";
// import jwt from 'express-jwt';

import MongooseConnection from "../db/mongo/mongoConnection";
import routes from "./routes/routes";

dotenv.config();
const db = new MongooseConnection();
const app: express.Application = express();
app.use(express.json())
app.use(cors())
app.options('*', cors());
app.use(compression());
app.disable('x-powered-by');

routes(app);

const port = process.env.SERVER_PORT;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
