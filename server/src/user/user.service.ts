import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    async create(data: Prisma.UserCreateInput): Promise<User> {
        const password = bcrypt.hashSync(data.password, 10);
        return await this.prisma.user.create({
            data: {...data, password}
        });
    }

    async find(email: string): Promise<User | null> {
        return await this.prisma.user.findUnique({
            where: {
                email
            }
        });
    }
}
