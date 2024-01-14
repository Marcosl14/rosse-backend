import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = {
  id: number;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      username: process.env.USER_NAME,
      password: process.env.USER_PASSWORD,
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
