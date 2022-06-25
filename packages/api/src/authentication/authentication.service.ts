import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import User from './models/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticationService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService
  ) {}

  public async createUser(username: string, password: string) {
    let user = new User();
    user.username = username;
    user.password = await this.hashPassword(password);
    user = await this.usersRepository.save(user);
    const { password: _, ...result } = user;
    return result;
  }

  public async verifyUser(username: string, password: string) {
    const user = await this.usersRepository.findOne({ where: { username } });
    if (user && await this.verifyPassword(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  public async login(user: Omit<User, "password">) {
    const payload = { username: user.username, sub: user.id };
    return {
      accessToken: this.jwtService.sign(payload)
    };
  }

  private async hashPassword(password: string): Promise<string> {
    const hashed = await bcrypt.hash(password, 10);
    return hashed;
  }

  private async verifyPassword(plain: string, hashed: string): Promise<boolean>  {
    return bcrypt.compare(plain, hashed);
  }
}
