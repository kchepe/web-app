/*
  Warnings:

  - A unique constraint covering the columns `[employeeId]` on the table `Credential` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Credential` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Employee` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX `Credential_employeeId_key` ON `Credential`(`employeeId`);

-- CreateIndex
CREATE UNIQUE INDEX `Employee_email_key` ON `Employee`(`email`);
