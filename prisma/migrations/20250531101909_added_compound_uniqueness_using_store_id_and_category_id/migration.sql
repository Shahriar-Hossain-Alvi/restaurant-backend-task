/*
  Warnings:

  - A unique constraint covering the columns `[storeId,categoryId]` on the table `StoreCategoryMapping` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "StoreCategoryMapping_storeId_categoryId_key" ON "StoreCategoryMapping"("storeId", "categoryId");
