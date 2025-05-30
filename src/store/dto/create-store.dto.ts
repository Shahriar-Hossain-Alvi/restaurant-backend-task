import { CommissionType, RestaurantStatus, StoreType } from '@prisma/client';
import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateStoreDto {
  @IsString()
  storeName: string;

  @IsString()
  phoneNumber: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  hubName: string;

  @IsEnum(StoreType)
  storeType: StoreType;

  @IsNumber()
  minOrderAmount: number;

  @IsString()
  operatingHourStart: string;

  @IsString()
  operatingHourEnd: string;

  @IsString()
  keywords: string;

  @IsString()
  cuisines: string;

  @IsString()
  bannerImageUrl: string;

  @IsOptional()
  @IsString()
  restaurantMouUrl?: string;

  @IsOptional()
  @IsDateString()
  restaurantMouExpiryDate?: string;

  @IsEnum(RestaurantStatus)
  status: RestaurantStatus;

  @IsEnum(CommissionType)
  commissionType: CommissionType;

  @IsNumber()
  commissionAmount: number;

  @IsBoolean()
  isVatIncluded: boolean;

  @IsNumber()
  preparationTimePenaltyPercentage: number;

  @IsNumber()
  failedOrderPercentage: number;

  @IsString()
  address: string;

  @IsString()
  area: string;

  @IsString()
  longitude: string;

  @IsString()
  latitude: string;

  @IsString()
  city: string;

  @IsOptional()
  @IsString()
  postcode?: string;

  @IsOptional()
  @IsString()
  metaTitle?: string;

  @IsOptional()
  @IsString()
  metaTags?: string;

  @IsOptional()
  @IsString()
  metaDescription?: string;
}
