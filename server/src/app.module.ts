import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { EmployeeModule } from './modules/auth/AuthModule';

@Module({
  imports: [PrismaModule, EmployeeModule],
})
export class AppModule {}
