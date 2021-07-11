import { Injectable } from '@nestjs/common';
import { CreateEmployeeDTO } from './employee-create.dto';
import { EmployeeRepository } from './employee.repository';
import { Employee } from './schemas/employee.schema';

@Injectable()
export class EmployeesService {
  constructor(private repository: EmployeeRepository) {}

  findAll() {
    return this.repository.findAll();
  }

  create(data: CreateEmployeeDTO): Promise<Employee> {
    return this.repository.create(data);
  }

  // search(employeeSearchDto: EmployeeSearchDTO) {
  //   // const { name, status } = employeeSearchDto;

  //   return employeeSearchDto;
  // }

  // findById(id: string) {
  //   const employee = this.employees.find(({ id: ctx_id }) => id === ctx_id);

  //   if (!employee) {
  //     throw new NotFoundException('No Employee found with provided ID');
  //   }

  //   return employee;
  // }

  // update(employeeUpdateDTO: EmployeeUpdateDTO) {
  //   const { city, id } = employeeUpdateDTO;
  //   const employee = this.findById(id);
  //   employee.nearestCity = city;
  //   return employee;
  // }

  // delete(id: string) {
  //   this.findById(id);
  //   this.employees = this.employees.filter((each) => each.id !== id);
  // }
}
