import { DataSource } from 'typeorm';
import { CourseEntity } from './entities/course.entity/course.entity';
import { TagEntity } from './entities/tag.entity/tag.entity';

export const coursesProviders = [
  {
    provide: 'COURSES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(CourseEntity),
    inject: ['DATA_SOURCE'],
    },
    
    {
    provide: 'TAGS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(TagEntity),
    inject: ['DATA_SOURCE'],
  },
];
