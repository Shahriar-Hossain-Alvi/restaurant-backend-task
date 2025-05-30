-- CreateEnum
CREATE TYPE "CommissionType" AS ENUM ('PERCENTAGE', 'FLAT');

-- CreateEnum
CREATE TYPE "StoreType" AS ENUM ('RESTAURANT', 'SHOP', 'GROCERY');

-- CreateEnum
CREATE TYPE "RestaurantStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'SUSPENDED', 'DEAL_CLOSED');

-- CreateEnum
CREATE TYPE "CategoryStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateTable
CREATE TABLE "Store" (
    "id" TEXT NOT NULL,
    "businessOwnerId" TEXT NOT NULL,
    "storeName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "hubName" TEXT NOT NULL,
    "storeType" "StoreType" NOT NULL,
    "minOrderAmount" INTEGER NOT NULL,
    "operatingHourStart" TEXT NOT NULL,
    "operatingHourEnd" TEXT NOT NULL,
    "keywords" TEXT NOT NULL,
    "cuisines" TEXT NOT NULL,
    "bannerImageUrl" TEXT NOT NULL,
    "restaurantMouUrl" TEXT,
    "restaurantMouExpiryDate" TIMESTAMP(3),
    "status" "RestaurantStatus" NOT NULL DEFAULT 'INACTIVE',
    "commissionType" "CommissionType" NOT NULL,
    "commissionAmount" DOUBLE PRECISION NOT NULL,
    "isVatIncluded" BOOLEAN NOT NULL DEFAULT false,
    "preparationTimePenaltyPercentage" DOUBLE PRECISION NOT NULL,
    "failedOrderPercentage" DOUBLE PRECISION NOT NULL,
    "address" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "postcode" TEXT,
    "metaTitle" TEXT,
    "metaTags" TEXT,
    "metaDescription" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Store_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StoreCategory" (
    "id" TEXT NOT NULL,
    "category_name" TEXT NOT NULL,
    "storeType" "StoreType" NOT NULL,

    CONSTRAINT "StoreCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StoreCategoryMapping" (
    "id" TEXT NOT NULL,
    "storeId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "status" "CategoryStatus" NOT NULL DEFAULT 'ACTIVE',

    CONSTRAINT "StoreCategoryMapping_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "StoreCategoryMapping" ADD CONSTRAINT "StoreCategoryMapping_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreCategoryMapping" ADD CONSTRAINT "StoreCategoryMapping_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "StoreCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
