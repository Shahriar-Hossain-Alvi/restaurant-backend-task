/*
  Warnings:

  - A unique constraint covering the columns `[categoryName]` on the table `StoreCategory` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "StoreCategory_categoryName_key" ON "StoreCategory"("categoryName");
