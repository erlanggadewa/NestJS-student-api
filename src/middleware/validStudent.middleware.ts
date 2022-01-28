import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { students } from 'src/db';

@Injectable()
export class ValidStudentMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const studentId = req.params.studentId;
    const isValidStudent = students.some((student) => student.id === studentId);
    if (!isValidStudent) {
      throw new HttpException('Student not found', 400);
    }
    next();
  }
}
