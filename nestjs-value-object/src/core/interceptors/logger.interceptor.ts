import { CallHandler, ExecutionContext, Inject, Injectable, NestInterceptor } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Logger } from 'winston';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
    constructor(@Inject('winston') private logger: Logger) {}

    private execute(req: Request, now: number) {
        this.logger.info({
            by: 'eneas.eng@yahoo.com',
            ip: req.ip,
            route: req.route.path,
            method: req.method,
            timestamp: new Date().toISOString(),
            timeToExecute: `${Date.now() - now} ms`,
            data: {
                body: { ...req.body },
                query: req.query,
                params: req.params,
            },
        });
    }

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest();

        const now = Date.now();

        return next.handle().pipe(
            tap(() => {
                this.execute(request, now);
            }),
        );
    }
}
