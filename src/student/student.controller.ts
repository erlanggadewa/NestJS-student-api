import { Controller, Get, Param, Post, Put, Body } from '@nestjs/common';
import {
  FindStudentResponseDto,
  StudentResponseDto,
  CreateStudentDto,
  UpdateStudentDto,
} from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudents(): FindStudentResponseDto[] {
    return this.studentService.getStudents();
  }

  @Get('/:studentId')
  getStudentById(
    @Param('studentId') studentId: string,
  ): FindStudentResponseDto {
    return this.studentService.getStudentById(studentId);
  }

  @Post()
  createStudent(@Body() body: CreateStudentDto): StudentResponseDto {
    return this.studentService.createStudent(body);
  }

  @Put('/:studentId')
  editStudent(
    @Param('StudentId') studentId: string,
    @Body() body: UpdateStudentDto,
  ): StudentResponseDto {
    return this.studentService.editStudent(studentId, body);
  }
}
