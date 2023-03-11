import { NotFoundException } from '@nestjs/common';

import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  let service: CoursesService;
  let id;
  let date;

  beforeEach(async () => {
    service = new CoursesService();
    id: 'c35f3c46-bfab-11ed-afa1-0242ac120002';
    date: new Date();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a course', () => {
    const expectOutputTags = [{ id, name: 'nestjs', created_at: date }];

    const expectOutputCourse = [
      {
        id,
        name: 'Treinamento',
        description: 'Treinando nestjs',
        created_at: date,
        tags: expectOutputTags,
      },
    ];
  });





  
  // describe('findOne', () => {
  //   describe('find course by ID', () => {
  //     it('should return object course', async () => {
  //       const courseId = '1';

  //       const expectedCourse = {};

  //       courseRepository.findOne.mockReturnValue(expectedCourse);
  //       const course = await service.findOne(courseId);
  //       expect(course).toEqual(expectedCourse);
  //     });

  //     it('Should return a notFoundException', async () => {
  //       const courseId = '1';
  //       const expectedCourse = {};

  //       courseRepository.findOne.mockReturnValue(undefined);

  //       try {
  //         await service.findOne(courseId);
  //       } catch (error) {
  //         expect(error).toBeInstanceOf(NotFoundException);
  //         expect(error.message).toEqual(
  //           `CourseEntity ID ${courseId} not found`,
  //         );
  //       }
  //     });
  //   });
  // });
});
