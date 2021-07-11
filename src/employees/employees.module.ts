import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeRepository } from './employee.repository';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { Employee, EmployeeSchema } from './schemas/employee.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Employee.name, schema: EmployeeSchema },
    ]),
  ],
  controllers: [EmployeesController],
  providers: [EmployeesService, EmployeeRepository],
})
export class EmployeesModule {}
