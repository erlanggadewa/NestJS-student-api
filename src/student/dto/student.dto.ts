export class FindStudentResponseDto {
  id: string;
  name: string;
  teacherId: string;
}

export class StudentResponseDto {
  id: string;
  name: string;
  teacherId: string;
}

export class CreateStudentDto {
  name: string;
  teacherId: string;
}

export class UpdateStudentDto {
  name: string;
  teacherId: string;
}

export class FindStudentByTeacherResponseDto {
  id: string;
  name: string;
}
