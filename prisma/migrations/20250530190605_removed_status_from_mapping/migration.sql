/*
  Warnings:

  - You are about to drop the column `status` on the `StoreCategoryMapping` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "StoreCategoryMapping" DROP COLUMN "status";

-- DropEnum
DROP TYPE "CategoryStatus";
