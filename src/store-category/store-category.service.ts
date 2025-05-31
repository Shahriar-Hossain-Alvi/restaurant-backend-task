import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateStoreCategoryDto } from './dto/create-store-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StoreCategoryService {
  constructor(private prisma: PrismaService) {}

  // create a store category
  async create(createStoreCategoryDto: CreateStoreCategoryDto) {
    const lowercaseCategoryName = createStoreCategoryDto.categoryName
      .trim()
      .toLowerCase();

    console.log(createStoreCategoryDto.categoryName);
    console.log(lowercaseCategoryName);

    // check for existing same store category
    const existingStoreCategory = await this.prisma.storeCategory.findUnique({
      where: {
        categoryName: lowercaseCategoryName,
      },
    });

    if (existingStoreCategory) {
      throw new BadRequestException(
        `A ${createStoreCategoryDto.categoryName} category already exists`,
      );
    }

    const newStoreCategory = await this.prisma.storeCategory.create({
      data: {
        categoryName: lowercaseCategoryName,
        storeType: createStoreCategoryDto.storeType,
      },
    });

    return newStoreCategory;
  }

  // get all store category
  async findAll() {
    const allStoreCategory = await this.prisma.storeCategory.findMany({
      orderBy: { categoryName: 'asc' },
    });

    return allStoreCategory;
  }

  // get single store categoryF
  async findOne(id: string) {
    const singleStoreCategory = await this.prisma.storeCategory.findUnique({
      where: {
        id,
      },
    });

    if (!singleStoreCategory) {
      throw new NotFoundException(`StoreCategory with id: ${id} not found`);
    }

    return singleStoreCategory;
  }

  // async update(id: string, updateStoreCategoryDto: UpdateStoreCategoryDto) {

  // }

  // async remove(id: string) {
  //   const existingStoreCategory = await this.prisma.storeCategory.findUnique({
  //     where: {
  //       id,
  //     },
  //   });

  //   if (!existingStoreCategory) {
  //     throw new NotFoundException(`StoreCategory with id: ${id} not found`);
  //   }

  //   const deleteStoreCategory = await this.prisma.storeCategory.delete({
  //     where: { id },
  //   });

  //   if (deleteStoreCategory) {
  //     return {
  //       message: 'StoreCategory deleted successfully',
  //     };
  //   }
  // }
}
