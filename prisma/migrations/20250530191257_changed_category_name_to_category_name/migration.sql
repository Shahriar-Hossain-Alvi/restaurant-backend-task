/*
  Warnings:

  - You are about to drop the column `category_name` on the `StoreCategory` table. All the data in the column will be lost.
  - Added the required column `categoryName` to the `StoreCategory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "StoreCategory" DROP COLUMN "category_name",
ADD COLUMN     "categoryName" TEXT NOT NULL;
