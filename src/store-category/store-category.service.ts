import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateStoreCategoryDto } from './dto/create-store-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StoreCategoryService {
  constructor(private prisma: PrismaService) {}

  async create(createStoreCategoryDto: CreateStoreCategoryDto) {
    const existingStoreCategory = await this.prisma.storeCategory.findUnique({
      where: {
        categoryName: createStoreCategoryDto.categoryName,
      },
    });

    if (existingStoreCategory) {
      throw new BadRequestException(
        `A ${createStoreCategoryDto.categoryName} category already exists`,
      );
    }

    const newStoreCategory = await this.prisma.storeCategory.create({
      data: { ...createStoreCategoryDto },
    });

    return newStoreCategory;
  }

  async findAll() {
    const allStoreCategory = await this.prisma.storeCategory.findMany({
      orderBy: { categoryName: 'asc' },
    });

    return allStoreCategory;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} storeCategory`;
  // }

  // update(id: number, updateStoreCategoryDto: UpdateStoreCategoryDto) {
  //   return `This action updates a #${id} storeCategory`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} storeCategory`;
  // }
}
