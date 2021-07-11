import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { EmployeeStatus, EmployeeTier } from '../employee.enum';

export type EmployeeDocument = Employee & Document;

@Schema()
export class Employee {
  @Prop()
  id: string;
  @Prop()
  firstName: string;
  @Prop()
  lastName: string;
  @Prop()
  designation: string;
  @Prop()
  nearestCity: string;
  @Prop()
  tier: EmployeeTier;
  @Prop()
  status: EmployeeStatus;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
