import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private postsService: PostsService) {}

    @Get('all')
    async getPosts() {
        return this.postsService.getPosts();
    }
    @Get('all/:id')
    async getPostById(@Param('id') id: string) {
        let postId = parseInt(id);
        return this.postsService.getPostById(postId);
    }
    @Get('user/:userId')
    async getPostByUserId(@Param('userId') userId: string) {
        let id = parseInt(userId);
        return this.postsService.getPostByUser(id);
    }
}
