/* eslint-disable @typescript-eslint/no-unsafe-call */
import { StoreType } from '@prisma/client';
import { IsEnum, IsString } from 'class-validator';

export class CreateStoreCategoryDto {
  @IsString()
  categoryName: string;

  @IsEnum(StoreType)
  storeType: StoreType;
}
