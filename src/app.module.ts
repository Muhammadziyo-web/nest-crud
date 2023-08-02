import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';


@Module({
  imports: [AuthModule, TodoModule, ConfigModule.forRoot(),MongooseModule.forRoot(process.env.DB), TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
