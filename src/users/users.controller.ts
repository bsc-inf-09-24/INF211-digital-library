import { Controller, Get, Param} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getUsers(){
       return this.usersService.getUsers(); 
    }

    @Get('/role/:role')
    getUserByRole(@Param('role') role: string){
        return this.usersService.getUsersByRole(String(role));
    }

    @Get('/:id')
    getUserById(@Param('id') id: string): string{
        return this.usersService.getUserById(Number(id));
    }   
}
