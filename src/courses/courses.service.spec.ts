import { NotFoundException } from '@nestjs/common';

import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto/create-course.dto';

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

  it('should create a course', async () => {
    const expectOutputTags = [{ id, name: 'nestjs', created_at: date }];

    const expectOutputCourse = {
      id,
      name: 'Treinamento',
      description: 'Treinando nestjs',
      created_at: date,
      tags: expectOutputTags,
    };
    const mockCourseRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse)),
      save: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse)),
    };
    const mockTagRepository = {
      findOne: jest.fn(),
      create: jest.fn().mockReturnValue(Promise.resolve(expectOutputTags)),
    };

    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository;
    //@ts-expect-error defined part of methods
    service['tagRepository'] = mockTagRepository;

    const createCourseDto: CreateCourseDto = {
      name: 'Test',
      description: 'Test description',
      tags: ['nestjs'],
    };

    const newCourse = await service.create(createCourseDto);

    expect(mockCourseRepository.save).toBeCalled();
    expect(expectOutputCourse).toStrictEqual(newCourse);
  });

  it('should return list courses', async () => {
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
    const mockCourseRepository = {
      findAll: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse)),
      find: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse)),
    };

    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository;

    const courses = await service.findAll();

    expect(mockCourseRepository.find).toBeCalled();
    expect(expectOutputCourse).toStrictEqual(courses);
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
