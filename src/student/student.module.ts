import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ValidStudentMiddleware } from 'src/common/middleware/validStudent.middleware';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
  imports: [PrismaService],
  exports: [StudentService],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidStudentMiddleware).forRoutes(
      {
        path: 'students/:studentId',
        method: RequestMethod.GET,
      },
      {
        path: 'students/:studentId',
        method: RequestMethod.PUT,
      },
    );
  }
}
