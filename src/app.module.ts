import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesController } from './courses/courses.controller';
import { CourseService } from './course/course.service';
import { CoursesService } from './courses/courses.service';

@Module({
  imports: [],
  controllers: [AppController, CoursesController],
  providers: [AppService, CourseService, CoursesService],
})
export class AppModule {}
