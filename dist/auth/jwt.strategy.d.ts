import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';
declare const CustomJwtStrategy_base: new (...args: any[]) => any;
export declare class CustomJwtStrategy extends CustomJwtStrategy_base {
    private readonly usersService;
    constructor(usersService: UsersService);
    validate(payload: {
        sub: number;
        username: string;
    }): Promise<User>;
}
export {};
