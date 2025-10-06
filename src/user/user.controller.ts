import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Create new user' })
  @ApiResponse({
    status: 201,
    description: 'Usuário criado com sucesso.',
    type: User,
  })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto.name);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Search by ID' })
  @ApiResponse({ status: 200, description: 'Usuário encontrado.', type: User })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado.' })
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<string> {
    return this.userService.findOne(id);
  }
}
