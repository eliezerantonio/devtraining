import { NotFoundException } from '@nestjs/common';

import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto/update-course.dto';

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

    expect(mockCourseRepository.save).toHaveBeenCalled();
    expect(expectOutputCourse).toStrictEqual(newCourse);
  });

  it('hould list courses', async () => {
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

    expect(mockCourseRepository.find).toHaveBeenCalled();
    expect(expectOutputCourse).toStrictEqual(courses);
  });

  it('should gets a course', async () => {
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
      findOne: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse)),
      find: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse)),
    };

    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository;

    const courses = await service.findOne(id);

    expect(mockCourseRepository.findOne).toHaveBeenCalled();
    expect(expectOutputCourse).toStrictEqual(courses);
  });

  it('should updates a course', async () => {
    const expectOutputTags = [{ id, name: 'nestjs', created_at: date }];

    const expectOutputCourse = {
      id,
      name: 'Treinamento',
      description: 'Treinando nestjs',
      created_at: date,
      tags: expectOutputTags,
    };
    const mockCourseRepository = {
      update: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse)),
      save: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse)),
      preload: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse)),
    };
    const mockTagRepository = {
      findOne: jest.fn(),
      create: jest.fn().mockReturnValue(Promise.resolve(expectOutputTags)),
    };

    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository;
    //@ts-expect-error defined part of methods
    service['tagRepository'] = mockTagRepository;

    const updateCourseDto: UpdateCourseDto = {
      name: 'Test',
      description: 'Test description',
      tags: ['nestjs'],
    };

    const course = await service.update(id, updateCourseDto);

    expect(mockCourseRepository.save).toHaveBeenCalled();
    expect(expectOutputCourse).toStrictEqual(course);
  });

  it('should deletes a course', async () => {
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
      findOne: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse)),
      find: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse)),
    };

    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository;

    const courses = await service.findOne(id);

    expect(mockCourseRepository.findOne).toHaveBeenCalled();
    expect(expectOutputCourse).toStrictEqual(courses);
  });

  

  it('should deletes a course', async () => {
    const expectOutputTags = [
      {
        id,
        name: 'nestjs',
        created_at: date,
      },
    ];
    const expectOutputCourse = [
      {
        id,
        name: 'Test',
        description: 'Test description',
        created_at: date,
        tags: expectOutputTags,
      },
    ];
    const mockCourseRepository = {
      findOne: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse)),
      remove: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse)),
    };
    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository;
    const course = await service.remove(id);
    expect(mockCourseRepository.remove).toHaveBeenCalled();
    expect(expectOutputCourse).toStrictEqual(course);
  });
});
