import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { CryptoService } from 'src/crypto/crypyo.service';
import { UserGateway } from './user.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, CryptoService, UserGateway],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
