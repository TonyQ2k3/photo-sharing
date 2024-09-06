import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('register')
    async registerUser(@Body() body: { email: string, username: string, password: string }) {
        return this.usersService.createUser(body);
    }

    @Get('all')
    async getUsers() {
        return this.usersService.getUsers();
    }

    @Get('all/:id')
    async getUserById(@Param('id') id: string) {
        let userId = parseInt(id);
        return this.usersService.getUserById(userId);
    }
}
