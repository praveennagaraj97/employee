import { IsIn, IsNotEmpty, IsString } from 'class-validator';
import { EmployeeTier } from './employee.enum';

export class CreateEmployeeDTO {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  designation: string;

  @IsString()
  @IsNotEmpty()
  nearestCity: string;

  @IsNotEmpty()
  @IsIn(Object.values(EmployeeTier))
  tier: EmployeeTier;
}
