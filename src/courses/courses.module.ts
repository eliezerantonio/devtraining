import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseEntity } from 'src/courses/entities/course.entity/course.entity';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { TagEntity } from './entities/tag.entity/tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CourseEntity, TagEntity])],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
