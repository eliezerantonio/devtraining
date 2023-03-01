import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CourseEntity } from '../course.entity/course.entity';

@Entity('tags')
export class TagEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => CourseEntity, (course) => course.tags)
  courses: CourseEntity[];
}
