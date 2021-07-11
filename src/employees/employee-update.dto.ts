import { IsNotEmpty, IsString } from 'class-validator';

export class EmployeeUpdateDTO {
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  city: string;
}
