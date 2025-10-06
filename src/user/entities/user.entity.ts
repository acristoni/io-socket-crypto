import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @ApiProperty({ example: 1, description: 'ID único do usuário' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'a1b2c3d4e5...',
    description: 'Nome criptografado do usuário',
  })
  @Column()
  encryptedName: string;

  @ApiProperty({
    example: 'c8f1a9d0c8f1a9d0',
    description: 'Vetor de inicialização usado na criptografia',
  })
  @Column()
  iv: string;

  @ApiProperty({
    example: 'b2f1d8e1c2f9...',
    description: 'Auth tag usado para validar integridade',
  })
  @Column()
  authTag: string;
}
