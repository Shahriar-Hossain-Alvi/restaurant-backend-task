/* eslint-disable @typescript-eslint/no-unsafe-call */
import { PartialType } from '@nestjs/mapped-types';
import { CreateStoreDto } from './create-store.dto';
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
import { CommissionType, RestaurantStatus, StoreType } from '@prisma/client';

export class UpdateStoreDto extends PartialType(CreateStoreDto) {
  @IsOptional()
  @IsString()
  storeName: string;

  @IsOptional()
  @IsString()
  phoneNumber: string;

  @IsOptional()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsOptional()
  @IsString()
  hubName: string;

  @IsOptional()
  @IsEnum(StoreType)
  storeType: StoreType;

  @IsOptional()
  @IsNumber()
  minOrderAmount: number;

  @IsOptional()
  @IsString()
  operatingHourStart: string;

  @IsOptional()
  @IsString()
  operatingHourEnd: string;

  @IsOptional()
  @IsString()
  keywords: string;

  @IsOptional()
  @IsString()
  cuisines: string;

  @IsOptional()
  @IsString()
  bannerImageUrl: string;

  @IsOptional()
  @IsString()
  restaurantMouUrl?: string;

  @IsOptional()
  @IsDateString()
  restaurantMouExpiryDate?: string;

  @IsOptional()
  @IsEnum(RestaurantStatus)
  status: RestaurantStatus;

  @IsOptional()
  @IsBoolean()
  openForOrder: boolean;

  @IsOptional()
  @IsEnum(CommissionType)
  commissionType: CommissionType;

  @IsOptional()
  @IsNumber()
  commissionAmount: number;

  @IsOptional()
  @IsBoolean()
  isVatIncluded: boolean;

  @IsOptional()
  @IsNumber()
  preparationTimePenaltyPercentage: number;

  @IsOptional()
  @IsNumber()
  failedOrderPercentage: number;

  @IsOptional()
  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  area: string;

  @IsOptional()
  @IsString()
  longitude: string;

  @IsOptional()
  @IsString()
  latitude: string;

  @IsOptional()
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
