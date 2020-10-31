import mongoose from "mongoose";
import config from "../../config/config";

export default class MongooseConnection {
    connection: mongoose.Connection | undefined;
    mongoUri: string;

    constructor() {
        this.mongoUri = config.mongoUri
        this.connectToDb();
    }

    connectToDb() {
        const options = {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        }
        mongoose.set('runValidators', true);
        mongoose.connect(this.mongoUri, options);
        this.connection = mongoose.connection;
        this.connection.once("open", async () => {
            console.log("Connected to mongo");
        });
        this.connection.on("error", () => {
            console.log("Error connecting to mongo");
        });
    }

    async disconnect() {
        await mongoose.disconnect();
        this.connection = undefined;
    }
}
