/*
  Warnings:

  - Added the required column `tipo` to the `Acesso` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `acesso` ADD COLUMN `tipo` VARCHAR(191) NOT NULL;
