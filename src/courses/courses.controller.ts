import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get('')
  findAll() {
    return 'Listagem de cursos';
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return `Curso #${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() body) {
    return body;
  }

  @Patch('id')
  update(@Param('id') id: string, @Body() body) {
    return ` Atualização do curso ${id}`;
  }

  @Delete('id')
  delete(@Param('id') id: string) {
    return ` Exclusão do curso ${id}`;
  }
}
