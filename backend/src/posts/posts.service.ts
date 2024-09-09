import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsService {
    constructor(private prisma: PrismaService) {}

    async getPosts() {
        return this.prisma.post.findMany();
    }

    async getPostById(id: number) {
        return this.prisma.post.findUnique({
            where: { id }
        });
    }
    async getPostByUser(userId: number) {
        return this.prisma.post.findMany({
            where: { userId }
        });
    }
    async createPost(data: any) {
        return this.prisma.post.create({
            data: {
                userId: data.userId,
                imageUrl: data.imageUrl,
                caption: data.caption,
            }
        });
    }
    async updatePost(id: number, data: any) {
        return this.prisma.post.update({
            where: { id },
            data
        });
    }
    async deletePost(id: number) {
        return this.prisma.post.delete({
            where: { id }
        });
    }  
}
