import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateStoreCategoryMappingDto } from './dto/create-store-category-mapping.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StoreCategoryMappingService {
  constructor(private prisma: PrismaService) {}

  async create(createStoreCategoryMappingDto: CreateStoreCategoryMappingDto) {
    // check if storeId exist
    const existingStoreId = await this.prisma.store.findUnique({
      where: {
        id: createStoreCategoryMappingDto.storeId,
      },
    });

    if (!existingStoreId) {
      throw new NotFoundException(
        `Store data with this id: ${createStoreCategoryMappingDto.storeId} not found`,
      );
    }

    // check if categoryId exists
    const existingCategoryId = await this.prisma.storeCategory.findUnique({
      where: {
        id: createStoreCategoryMappingDto.categoryId,
      },
    });

    if (!existingCategoryId) {
      throw new NotFoundException(
        `StoreCategory data with this id: ${createStoreCategoryMappingDto.categoryId} not found`,
      );
    }

    // check if same mapping exists
    const existingStoreCategoryMapping =
      await this.prisma.storeCategoryMapping.findUnique({
        where: {
          storeId_categoryId: {
            storeId: createStoreCategoryMappingDto.storeId,
            categoryId: createStoreCategoryMappingDto.categoryId,
          },
        },
      });

    if (existingStoreCategoryMapping) {
      throw new ConflictException(
        `A storeCategoryMapping already exists with same storeId: ${createStoreCategoryMappingDto.storeId} and categoryId: ${createStoreCategoryMappingDto.categoryId}.`,
      );
    }

    const newMapping = await this.prisma.storeCategoryMapping.create({
      data: { ...createStoreCategoryMappingDto },
    });

    return newMapping;
  }

  findAll() {
    return this.prisma.storeCategoryMapping.findMany();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} storeCategoryMapping`;
  // }

  // update(
  //   id: number,
  //   updateStoreCategoryMappingDto: UpdateStoreCategoryMappingDto,
  // ) {
  //   return `This action updates a #${id} storeCategoryMapping`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} storeCategoryMapping`;
  // }
}
