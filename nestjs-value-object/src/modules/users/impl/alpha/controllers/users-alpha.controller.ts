import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { ParamUUID } from 'core/decorators/param-uuid.decorator';
import { NotContentInterceptor } from 'core/interceptors/not-content.interceptor';
import { UsersController } from 'modules/users/interfaces';
import { CreateUserDto, ResponseUserDto } from 'modules/users/interfaces/dtos';
import { UserAlphaServicesAdapter } from '../services/user-alpha-services.adapter';
import { pathsConfig } from '@configs/paths.config';
const { path, findOne } = pathsConfig.users;

@Controller({ path, version: '1' })
@UseInterceptors(NotContentInterceptor)
export class UsersAlphaController implements UsersController {
    constructor(private readonly service: UserAlphaServicesAdapter) {}

    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<ResponseUserDto> {
        return await this.service.create(createUserDto);
    }

    @Get(findOne)
    async findOne(@ParamUUID() id: string): Promise<ResponseUserDto> {
        return await this.service.findOne(id);
    }

    @Get()
    async list(): Promise<ResponseUserDto[]> {
        return await this.service.list();
    }
}
