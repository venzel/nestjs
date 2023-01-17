import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class GlobalHttpFilterException implements ExceptionFilter {
    catch(httpException: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp(),
            response = ctx.getResponse<Response>(),
            request = ctx.getRequest<Request>(),
            status = httpException.getStatus(),
            message = httpException.message,
            exception = httpException.name,
            timestamp = new Date().toISOString();

        response.status(status).json({
            statusCode: status,
            exception,
            timestamp,
            path: request.url,
            message,
        });
    }
}
