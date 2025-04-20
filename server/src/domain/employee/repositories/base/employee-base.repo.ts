import { Employee } from '../../entities';

export abstract class EmployeeBaseRepo {
  abstract findById(id: string): Promise<Employee | null>;
  abstract findAll(): Promise<Employee[]>;
}
