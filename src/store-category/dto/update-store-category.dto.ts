/* eslint-disable @typescript-eslint/no-unsafe-call */
import { PartialType } from '@nestjs/mapped-types';
import { CreateStoreCategoryDto } from './create-store-category.dto';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { StoreType } from '@prisma/client';

export class UpdateStoreCategoryDto extends PartialType(
  CreateStoreCategoryDto,
) {
  @IsOptional()
  @IsString()
  categoryName: string;

  @IsOptional()
  @IsEnum(StoreType)
  storeType: StoreType;
}
