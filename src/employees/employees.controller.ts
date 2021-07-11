import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { from } from 'rxjs';
import { CreateEmployeeDTO } from './employee-create.dto';
import { EmployeesService } from './employees.service';

@Controller('employees')
@UsePipes(ValidationPipe)
export class EmployeesController {
  constructor(private employeeService: EmployeesService) {}

  @Get()
  getAllEmployees() {
    return from(this.employeeService.findAll());
  }

  @Post()
  @HttpCode(201)
  createEmployee(@Body() data: CreateEmployeeDTO) {
    return from(this.employeeService.create(data));
  }

  // @Get(':id')
  // getEmployeeById(@Param('id') id: string) {
  //   console.log(id);

  //   return this.employeeService.findById(id);
  // }

  // @Put(':id/city')
  // updateEmployee(
  //   @Param('id', ParseIntPipe) id: string,
  //   @Body('city') city: string,
  // ) {
  //   return this.employeeService.update({ id, city });
  // }

  // @Delete(':id')
  // @HttpCode(204)
  // deleteEmployee(@Param('id', ParseIntPipe) id: string) {
  //   return this.employeeService.delete(id);
  // }
}
