import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseEntity } from 'src/courses/entities/course.entity/course.entity';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';

@Module({
  imports: [TypeOrmModule.forFeature([CourseEntity])],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
