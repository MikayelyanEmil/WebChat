import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) { }

    signup(createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
        // const accessToken = 1, refreshToken = 2;
        // return {accessToken, refreshToken};
    }

    login(loginDto: LoginDto) {

    }

    async validateUser(email: string, password): Promise<any> {
        const user = await this.userService.find(email);
        if (user && await bcrypt.compare(password, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
}
