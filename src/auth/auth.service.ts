import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { validatePassword } from '../utils/password';
import { LoginDto } from './dtos/login.dto';
import { ReturnLogin } from './dtos/returnLogin.dto';
import { ReturnUserDto } from '../user/dtos/returnUser.dto';
import { LoginPayload } from './dtos/loginPayload.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto): Promise<ReturnLogin> {
    const user: UserEntity | undefined = await this.userService
      .findUserByEmail(loginDto.email)
      .catch(() => undefined);

    const isMatch = await validatePassword(
      loginDto.password,
      user?.password || '',
    );

    if (!user || !isMatch) {
      throw new NotFoundException('Email or password invalid');
    }

    return {
      accessToken: this.jwtService.sign({ ...new LoginPayload(user) }),
      user: new ReturnUserDto(user),
    };
  }
}
