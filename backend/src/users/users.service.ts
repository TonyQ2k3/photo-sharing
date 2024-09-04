import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    async createUser(data: any) {
        const passwordHash = await bcrypt.hash(data.password, 10);
        return this.prisma.user.create({
            data: {
                email: data.email,
                username: data.username,
                passwordHash,
                profilePicture: ""
            }
        });
    }

    async getUserById(id: number) {
        return this.prisma.user.findUnique({
            where: {
                id,
            },
        });
    }

    async getUserByEmail(email: string) {
        return this.prisma.user.findUnique({
            where: {
                email,
            },
        });
    }

    async getUsers() {
        return this.prisma.user.findMany();
    }

    async updateUser(id: number, data: any) {
        return this.prisma.user.update({
            where: {
                id,
            },
            data,
        });
    }

    async deleteUser(id: number) {
        return this.prisma.user.delete({
            where: {
                id,
            },
        });
    }
}
