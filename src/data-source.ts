import { DataSource } from 'typeorm';
import { User } from './user/entities/user.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'nestuser',
  password: 'nestpassword',
  database: 'nestdb',
  entities: [User],
  migrations: ['src/migrations/*{.ts,.js}'],
});
