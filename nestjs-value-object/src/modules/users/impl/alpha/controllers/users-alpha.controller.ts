import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { ParamUUID } from 'src/core/decorators/param-uuid.decorator';
import { NotContentInterceptor } from 'src/core/interceptors/not-content.interceptor';
import { UsersController } from 'src/modules/users/interfaces';
import { CreateUserDto, ResponseUserDto } from 'src/modules/users/interfaces/dtos';
import { UserAlphaServicesAdapter } from '../services/user-alpha-services.adapter';

@Controller({ path: 'users', version: '1' })
@UseInterceptors(NotContentInterceptor)
export class UsersAlphaController implements UsersController {
    constructor(private readonly service: UserAlphaServicesAdapter) {}

    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<ResponseUserDto> {
        return await this.service.create(createUserDto);
    }

    @Get(':id')
    async findOne(@ParamUUID() id: string): Promise<ResponseUserDto> {
        return await this.service.findOne(id);
    }

    @Get()
    async list(): Promise<ResponseUserDto[]> {
        return await this.service.list();
    }
}
