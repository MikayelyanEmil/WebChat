import { Body, Controller, Get, Post, Request, UseFilters, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { PrismaClientExceptionFilter } from 'src/prisma-client-exception/prisma-client-exception.filter';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signup')
    @UsePipes(ValidationPipe)
    @UseFilters(PrismaClientExceptionFilter)
    signup(@Body() createUserDto: CreateUserDto) {
        return this.authService.signup(createUserDto);
        // const { accessToken, refreshToken } = this.authService.signup(createUserDto);
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Request() req) {
        return req.user;
    }
}
