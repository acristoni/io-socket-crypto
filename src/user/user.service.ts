import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CryptoService } from 'src/crypto/crypyo.service';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UserGateway } from './user.gateway';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    private cryptoService: CryptoService,
    private userGateway: UserGateway,
  ) {}

  async create(name: string): Promise<User> {
    const { encrypted, iv, authTag } = this.cryptoService.encrypt(name);

    const user = this.userRepo.create({
      encryptedName: encrypted,
      iv,
      authTag,
    });

    const savedUser = await this.userRepo.save(user);

    // emite evento pelo socket
    this.userGateway.userCreated({ id: savedUser.id, name });

    return savedUser;
  }

  async findOne(id: number): Promise<string> {
    const user = await this.userRepo.findOneBy({ id });
    if (!user) return null;

    return this.cryptoService.decrypt(
      user.encryptedName,
      user.iv,
      user.authTag,
    );
  }
}
