import { Body, Controller, Get, Param, Put } from '@nestjs/common';
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
    @Param('teacherId') teacherId: string,
  ): FindStudentByTeacherResponseDto[] {
    return this.studentService.getStudentsByTeacherId(teacherId);
  }

  @Put('/:studentId')
  editStudentByTeacherId(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
    @Body() body: UpdateStudentDto,
  ): StudentResponseDto {
    return this.studentService.editStudentByTeacherId(
      teacherId,
      studentId,
      body,
    );
  }
}
