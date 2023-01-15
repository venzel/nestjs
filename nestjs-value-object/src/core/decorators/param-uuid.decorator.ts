import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const ParamUUID = createParamDecorator((_data: unknown, context: ExecutionContext) => {
    return context.switchToHttp().getRequest().params.id;
});
