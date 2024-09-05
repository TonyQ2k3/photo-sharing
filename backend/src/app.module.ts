import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsersModule, 
    PostsModule, 
    PrismaModule, 
    AuthModule,
    JwtModule.register({
      secret: 'yoursecretkey', // Change this to a secure key
      signOptions: { expiresIn: '60s' },
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
