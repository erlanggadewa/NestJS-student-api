import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ValidStudentMiddleware } from 'src/middleware/validStudent.middleware';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
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
