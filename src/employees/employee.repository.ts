import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Query } from 'mongoose';
import { CreateEmployeeDTO } from './employee-create.dto';
import { Employee, EmployeeDocument } from './schemas/employee.schema';

@Injectable()
export class EmployeeRepository {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>,
  ) {}

  create(employeeDTO: CreateEmployeeDTO): Promise<Employee> {
    return this.employeeModel.create(employeeDTO);
  }

  findAll(): Query<
    EmployeeDocument[],
    EmployeeDocument,
    any,
    EmployeeDocument
  > {
    return this.employeeModel.find();
  }
}
