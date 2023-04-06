import { DataSourceOptions } from 'typeorm';
import { User } from './User/user-entity';

const config: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'user',
  entities: [User],
  synchronize: true,
};

export = config;
