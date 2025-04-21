import { PrismaService } from '../../prisma/prisma.service';

export class EmployeeIdGenerator {
  constructor(private readonly prisma: PrismaService) {}

  async generateEmployeeId(firstname: string, lastname: string): Promise<string> {
    const firstInitial = firstname.charAt(0).toUpperCase();
    const lastInitial = lastname.charAt(0).toUpperCase();
    const year = new Date().getFullYear();

    const lastEmployee = await this.prisma.employee.findFirst({
      orderBy: {
        id: 'desc',
      },
      select: {
        id: true,
      },
    });

    let newCounter = 1;

    if (lastEmployee && lastEmployee.id) {
      const lastId = lastEmployee.id;
      const counterPart = lastId.split('-')[2];
      newCounter = parseInt(counterPart, 10) + 1;
    }

    const paddedCounter = String(newCounter).padStart(5, '0');
    const newEmployeeId = `${firstInitial}${lastInitial}-${year}-${paddedCounter}`;

    return newEmployeeId;
  }
}
