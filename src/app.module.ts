import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [
    CoursesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      host: 'db',
      username: 'postgres',
      password: 'docker',
      database: 'trainingnestjs',
      entities: [__dirname + '/**/*.entity.ts'],
      autoLoadEntities: false,
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
