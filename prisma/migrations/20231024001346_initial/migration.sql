/*
  Warnings:

  - A unique constraint covering the columns `[cracha]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `User_cracha_key` ON `User`(`cracha`);
