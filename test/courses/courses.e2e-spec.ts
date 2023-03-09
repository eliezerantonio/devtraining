import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { CoursesModule } from '../../src/courses/courses.module';

describe('Courses: /courses', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CoursesModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

 
  it.todo('Create POST  /courses');
});
