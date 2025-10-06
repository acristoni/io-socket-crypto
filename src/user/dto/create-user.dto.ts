import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'John Doe',
    description:
      'Nome do usuário em texto puro (será criptografado antes de salvar)',
  })
  name: string;
}
