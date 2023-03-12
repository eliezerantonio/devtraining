import { DataSource } from 'typeorm';
import { CreateCoursesTable1677979113541 } from './migrations/1677979113541-CreateCoursesTable';
import { CreateTagsTable1678011239601 } from './migrations/1678011239601-CreateTagsTable';
import { CreateCoursesTagsTable1678013232771 } from './migrations/1678013232771-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1678013846703 } from './migrations/1678013846703-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1678014418938 } from './migrations/1678014418938-AddTagsIdToCoursesTagsTable';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        port: 5432,
        host: 'db',
        username: 'postgres',
        password: 'docker',
        database: 'trainingnestjs',
        entities: [__dirname + '/../**/*.entity.js'],
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];

export const dataSource = new DataSource({
  type: 'postgres',
  port: 5432,
  host: 'db',
  username: 'postgres',
  password: 'docker',
  database: 'trainingnestjs',
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: false,
  migrations: [
    CreateCoursesTable1677979113541,
    CreateTagsTable1678011239601,
    CreateCoursesTagsTable1678013232771,
    AddCoursesIdToCoursesTagsTable1678013846703,
    AddTagsIdToCoursesTagsTable1678014418938,
  ],
});
