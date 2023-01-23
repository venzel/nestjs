import { utilities as nestWinstonModuleUtilities, WinstonModuleOptions } from 'nest-winston';
import * as winston from 'winston';

export const winstonConfig: WinstonModuleOptions = {
    levels: winston.config.npm.levels,
    level: 'verbose',
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.cli(),
                winston.format.timestamp(),
                winston.format.ms(),
                nestWinstonModuleUtilities.format.nestLike('API', {
                    colors: true,
                    prettyPrint: true,
                }),
            ),
        }),
        new winston.transports.File({
            level: 'verbose',
            filename: 'application.log',
            dirname: 'logs',
            maxsize: 5242880, // 5MB
            maxFiles: 1,
        }),
    ],
};
