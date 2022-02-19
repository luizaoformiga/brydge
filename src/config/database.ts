import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'brydge.db',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
