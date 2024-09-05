import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('register')
    async registerUser(@Body() body: { email: string, username: string, password: string }) {
        return this.usersService.createUser(body);
    }
}
