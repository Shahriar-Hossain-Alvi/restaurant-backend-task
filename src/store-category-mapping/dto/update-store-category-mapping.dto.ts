import { PartialType } from '@nestjs/mapped-types';
import { CreateStoreCategoryMappingDto } from './create-store-category-mapping.dto';

export class UpdateStoreCategoryMappingDto extends PartialType(
  CreateStoreCategoryMappingDto,
) {}
