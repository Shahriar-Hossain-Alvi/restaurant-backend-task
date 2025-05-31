-- CreateEnum
CREATE TYPE "StoreCategoryMappingStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- AlterTable
ALTER TABLE "StoreCategoryMapping" ADD COLUMN     "status" "StoreCategoryMappingStatus" NOT NULL DEFAULT 'ACTIVE';
