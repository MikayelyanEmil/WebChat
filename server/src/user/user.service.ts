import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async createUser(data: Prisma.UserCreateInput): Promise<User> {
        // try {
            return await this.prisma.user.create({
                data
            });
        // } catch (error) {
            // console.log(Object.keys(error));
            // console.log(error);
            // if (error.code == 'P2002') throw new BadRequestException('Account with that email already exists.')    
        // }
    }
}
