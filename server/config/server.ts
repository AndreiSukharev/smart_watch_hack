import express from 'express';
import http from 'http';
import cors from 'cors';
import compression from "compression";
import jwt from 'express-jwt';
import config from './config';


class Server {
    express: express.Application;
    httpServer: http.Server;

    constructor() {
        this.express = express();
    }

    init() {
        this.applyExpressMiddleware();
        this.startServer();
    }

    private applyExpressMiddleware() {
        // this.express.use(express.json())
        this.express.use(cors())
        this.express.options('*', cors());
        this.express.use(compression());
        this.express.disable('x-powered-by');
        this.express.use(this.initJwtMiddleware());
        // this.express.use(this.initLoggerMiddleware());
    }

    // private initLoggerMiddleware() {
    //     return expressWinston.logger({
    //         transports: [
    //             new winston.transports.Console()
    //         ],
    //         format: winston.format.combine(
    //             winston.format.colorize(),
    //             winston.format.json()
    //         ),
    //         meta: false, // optional: control whether you want to log the meta data about the request (default to true)
    //         msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
    //         expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
    //         colorize: false, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
    //         ignoreRoute: function (req, res) { return false; } // optional: allows to skip some log messages based on request and/or response
    //     });
    // }
    private initJwtMiddleware() {
        return jwt({
            secret: config.tokenSecret!,
            algorithms: ['HS256'],
            credentialsRequired: false,
        });
    }

    private startServer() {
        this.httpServer.listen({port: config.port}, () => {
            console.log(`🚀 Server ready at http://localhost:${config.port}`);
        });
    }
}

export default Server;

