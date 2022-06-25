import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthenticationService } from './authentication.service';
import { LocalStrategy } from './local.strategy';
import { AuthenticationController } from './authentication.controller';
import User from './models/user.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { JwtAuthGuard } from './jwt.guard';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: { expiresIn: '666y' }
    })
  ],
  providers: [AuthenticationService, LocalStrategy, JwtStrategy, JwtAuthGuard],
  controllers: [AuthenticationController],
  exports: [ JwtAuthGuard ]
})
export class AuthenticationModule {}
