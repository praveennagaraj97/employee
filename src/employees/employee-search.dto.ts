import { IsOptional } from 'class-validator';
import { EmployeeStatus } from './employee.enum';

export class EmployeeSearchDTO {
  @IsOptional()
  status: EmployeeStatus;

  @IsOptional()
  name: string;
}
