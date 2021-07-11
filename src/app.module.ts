import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      useCreateIndex: true,
    }),
    EmployeesModule,
  ],
})
export class AppModule {}
