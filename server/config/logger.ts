import winston, {Logger} from 'winston';

// const myformat = winston.format.cli({ colors: { info: 'blue' }});
const myformat = winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.align(),
    winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
);
const logger : Logger = winston.createLogger({
    level: 'info',
    // format: winston.format.printf(info => `${info.message}`),
    format: winston.format.simple(),
    transports: [
        new winston.transports.Console({ format: myformat })
    ]
});

export default logger;
