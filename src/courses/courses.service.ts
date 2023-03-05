import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseEntity } from 'src/courses/entities/course.entity/course.entity';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto/update-course.dto';
import { TagEntity } from './entities/tag.entity/tag.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(CourseEntity)
    private readonly courseRepository: Repository<CourseEntity>,
    @InjectRepository(TagEntity)
    private readonly tagRepository: Repository<TagEntity>,
  ) {}

  findAll() {
    return this.courseRepository.find({ relations: ['tags'] });
  }

  findOne(id: string) {
    const course = this.courseRepository.findOne(id, { relations: ['tags'] });

    if (!course) {
      throw new NotFoundException(`CourseEntity ID ${id} not found`);
    }

    return course;
  }

  async create(createCourseDto: CreateCourseDto) {
    const tags = await Promise.all(
      createCourseDto.tags.map((name) => this.preloadTagByName(name)),
    );

    const course = this.courseRepository.create({
      ...createCourseDto,
      tags,
    });

    return this.courseRepository.save(course);
  }

  async update(id: string, updateCourseDto: UpdateCourseDto) {
    const tags =
      updateCourseDto.tags &&
      (await Promise.all(
        updateCourseDto.tags.map((name) => this.preloadTagByName(name)),
      ));

    const course = await this.courseRepository.preload({
      id: id,
      ...updateCourseDto,
      tags,
    });

    if (!course) {
      throw new NotFoundException(`CourseEntity ID ${id} not found`);
    }

    return this.courseRepository.save(course);
  }

  async remove(id: string) {
    const course = await this.courseRepository.findOne(id);
    if (!course) {
      throw new NotFoundException(`CourseEntity ID ${id} not found`);
    }
    return this.courseRepository.remove(course);
  }

  private async preloadTagByName(name: string): Promise<TagEntity> {
    const tag = await this.tagRepository.findOne({ name });

    if (tag) {
      return tag;
    }

    return this.tagRepository.create({ name });
  }
}
