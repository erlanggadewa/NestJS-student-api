import { Injectable } from '@nestjs/common';
import { nanoid } from 'nanoid';
import { students } from 'src/db';

import {
  CreateStudentDto,
  FindStudentByTeacherResponseDto,
  FindStudentResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';

@Injectable()
export class StudentService {
  private students = students;
  getStudents(): FindStudentResponseDto[] {
    return this.students;
  }

  getStudentById(studentId: string): FindStudentResponseDto {
    return this.students.find((student) => student.id === studentId);
  }

  createStudent(payload: CreateStudentDto): StudentResponseDto {
    const newStudent = { id: nanoid(), ...payload };
    this.students.push(newStudent);
    return newStudent;
  }

  editStudent(
    studentId: string,
    payload: UpdateStudentDto,
  ): StudentResponseDto {
    let updatedStudent: StudentResponseDto;
    const updatedStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        updatedStudent = {
          id: studentId,
          ...payload,
        };
        return updatedStudent;
      } else return student;
    });
    this.students = updatedStudentList;
    return updatedStudent;
  }

  getStudentsByTeacherId(teacherId: string): FindStudentByTeacherResponseDto[] {
    const selectedStudent = this.students.filter((student) => {
      return student.teacherId === teacherId;
    });
    return selectedStudent;
  }

  editStudentByTeacherId(
    teacherId: string,
    studentId: string,
    payload: UpdateStudentDto,
  ): StudentResponseDto {
    let editedStudent: StudentResponseDto;

    const updatedStudentsList = students.map((student) => {
      if (student.id === studentId && student.teacherId === teacherId) {
        editedStudent = { id: studentId, ...payload };
        return editedStudent;
      } else return student;
    });

    this.students = updatedStudentsList;
    return editedStudent;
  }
}
