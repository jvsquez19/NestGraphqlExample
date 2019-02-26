import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {GraphQLModule} from '@nestjs/graphql';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      include: [UserModule],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
