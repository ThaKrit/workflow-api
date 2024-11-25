import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { CustomJwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'your_secret_key',
      signOptions: { expiresIn: '300s' },
    }),
    UsersModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, CustomJwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
