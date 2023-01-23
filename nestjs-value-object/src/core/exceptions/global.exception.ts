import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { Response, Request } from 'express';
import * as fs from 'fs';
import { AppException } from './app.exception';

export interface HttpExceptionResponse {
    statusCode: number;
    exception: string;
    message: string;
}

export interface CustomHttpExceptionResponse extends HttpExceptionResponse {
    path: string;
    method: string;
    timestamp: string;
}

@Catch()
export class GlobalException implements ExceptionFilter {
    catch(httpException: HttpException, host: ArgumentsHost) {
        let ctx = host.switchToHttp(),
            response = ctx.getResponse<Response>(),
            request = ctx.getRequest<Request>(),
            statusCode = httpException.getStatus(),
            message = httpException.message,
            exception = httpException.name,
            timestamp = new Date().toISOString();

        const payload = this.getPayload(statusCode, exception, timestamp, request, message);

        if (httpException instanceof AppException) {
            return response.status(statusCode).json(payload);
        }

        if (httpException instanceof HttpException) {
            const response = httpException.getResponse() as HttpExceptionResponse;
            message = response.message || httpException.message;
        } else {
            statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
            message = 'Critical internal server error occurred!';
        }

        const exceptionLog = this.getExceptionLog(payload, httpException);

        this.writeExceptionLogToFile(exceptionLog);

        return response.status(statusCode).json(payload);
    }

    private getPayload(
        statusCode: HttpStatus,
        exception: string,
        timestamp: string,
        request: Request,
        message: string,
    ): CustomHttpExceptionResponse {
        return {
            statusCode,
            exception,
            timestamp,
            path: request.path,
            method: request.method,
            message,
        };
    }

    private getExceptionLog(response: CustomHttpExceptionResponse, httpException: HttpException) {
        const { message } = response;
        const stack = httpException instanceof HttpException ? httpException.stack : message;
        return `${JSON.stringify(response)}\n${stack}\n\n`;
    }

    private writeExceptionLogToFile(exceptionLog: string) {
        return fs.appendFile('error.log', exceptionLog, 'utf8', (err) => {
            if (err) throw err;
        });
    }
}
