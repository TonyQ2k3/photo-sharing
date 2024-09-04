import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsService {
    constructor(private prisma: PrismaService) {}

    async getPosts() {
        return this.prisma.post.findMany();
    }
}
