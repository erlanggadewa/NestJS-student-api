import { Injectable } from '@nestjs/common';
import { FindTeacherResponseDto } from './dto/teacher.dto';
import { teachers } from 'src/db';

@Injectable()
export class TeacherService {
  private teachers = teachers;

  getTeachers(): FindTeacherResponseDto[] {
    return this.teachers;
  }

  getTeacherById(teacherId: string): FindTeacherResponseDto {
    return this.teachers.find((teacher) => teacher.id === teacherId);
  }
}
