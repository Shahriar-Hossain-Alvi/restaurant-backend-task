import { IsString } from 'class-validator';

export class CreateStoreCategoryMappingDto {
  @IsString()
  storeId: string;

  @IsString()
  categoryId: string;
}
