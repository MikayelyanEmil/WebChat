import { Body, Controller, Delete, Get, Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { User } from '@prisma/client';
import { PrismaClientExceptionFilter } from 'src/prisma-client-exception/prisma-client-exception.filter';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    // @Get()
    // get(@Body() emailBody: { email: string }) {
    //     return this.userService.find(emailBody.email);
    // }

    @Post()
    @UsePipes(ValidationPipe)
    @UseFilters(PrismaClientExceptionFilter)
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.create(createUserDto);
    }

    @Delete()
    delete() {

    }
}
