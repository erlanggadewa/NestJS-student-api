import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Put,
} from '@nestjs/common';
import { StudentService } from 'src/student/student.service';

import {
  FindStudentByTeacherResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from '../student/dto/student.dto';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudentsByTeacherId(
    @Param('teacherId', ParseUUIDPipe) teacherId: string,
  ): FindStudentByTeacherResponseDto[] {
    return this.studentService.getStudentsByTeacherId(teacherId);
  }

  @Put('/:studentId')
  editStudentByTeacherId(
    @Param('teacherId', ParseUUIDPipe) teacherId: string,
    @Param('studentId', ParseUUIDPipe) studentId: string,
    @Body() body: UpdateStudentDto,
  ): StudentResponseDto {
    return this.studentService.editStudentByTeacherId(
      teacherId,
      studentId,
      body,
    );
  }
}
