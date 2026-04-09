import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        { id: 1, name: 'Alice Banda', email: 'alice@library.com' , role: 'admin'},
        { id: 2, name: 'Bob Phiri', email: 'bob@library.com' , role: 'member'},
        { id: 3, name: 'Carol Tembo', email: 'carol@library.com' , role: 'member'},
        { id: 4, name: 'David Mwale', email: 'david@library.com' , role: 'admin'},
    ];

    getUsers(): string {
        return JSON.stringify(this.users);
    }

    getUserById(id: number): string {
        const user = this.users.find(u=> u.id === id);
        return JSON.stringify(user)=="[]" ? JSON.stringify({message: "User not found"}):JSON.stringify(user);
    }

    getUsersByRole(role: string): string {
        const users = this.users.filter(u => u.role === role);
        return JSON.stringify(users)=="[]"  ? JSON.stringify({message: "No users found with this role"}):JSON.stringify(users);
    }
}
