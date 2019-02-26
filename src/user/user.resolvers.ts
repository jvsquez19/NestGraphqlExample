import { Resolver, Args, Query } from '@nestjs/graphql';
import { UserService } from './user/user.service';
import { ParseIntPipe } from '@nestjs/common';

@Resolver('User')
export class UserResolver {
constructor(
    private readonly userService: UserService,
) {}

@Query('user')
async user(@Args('id', ParseIntPipe) id: number) {
    return await this.userService.findOneById(id);
}

}
