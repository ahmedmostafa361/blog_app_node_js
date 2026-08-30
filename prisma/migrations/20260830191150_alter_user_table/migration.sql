/*
  Warnings:

  - You are about to drop the column `Name` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "Name",
ADD COLUMN     "name" TEXT;
