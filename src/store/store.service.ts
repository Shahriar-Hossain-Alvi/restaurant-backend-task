import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UpdateStoreDto } from './dto/update-store.dto';
import { CreateStoreDto } from './dto/create-store.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StoreService {
  constructor(private prisma: PrismaService) {}

  // create restaurant
  async create(createStoreDto: CreateStoreDto) {
    const existingStore = await this.prisma.store.findFirst({
      where: {
        OR: [
          { email: createStoreDto.email },
          { phoneNumber: createStoreDto.phoneNumber },
        ],
      },
    });

    if (existingStore) {
      throw new BadRequestException(
        'Store with same email, phone number already exists',
      );
    }

    const newStore = await this.prisma.store.create({
      data: {
        ...createStoreDto,
      },
    });

    return newStore;
  }

  // all store data for LISTS PAGE
  async findAll() {
    const allRestaurantList = await this.prisma.store.findMany({
      select: {
        createdAt: true,
        bannerImageUrl: true,
        storeName: true,
        id: true,
        operatingHourStart: true,
        operatingHourEnd: true,
        hubName: true,
        openForOrder: true,
        commissionAmount: true,
        commissionType: true,
        storeType: true,
        phoneNumber: true,
        restaurantMouUrl: true,
      },
    });

    return allRestaurantList;
  }

  // all storedata
  async findAllStoreData() {
    const allRestaurantList = await this.prisma.store.findMany();

    return allRestaurantList;
  }

  // single store by id
  async findOne(id: string) {
    const singleRestaurant = await this.prisma.store.findUnique({
      where: {
        id,
      },
    });

    return singleRestaurant;
  }

  // edit a store
  async update(id: string, updateStoreDto: UpdateStoreDto) {
    const existingStore = await this.prisma.store.findUnique({
      where: {
        id,
      },
    });

    if (!existingStore) {
      throw new NotFoundException(`Store with this ${id} ID not found.`);
    }

    const updatedStore = await this.prisma.store.update({
      where: { id },
      data: { ...updateStoreDto },
    });

    return updatedStore;
  }

  // delete a store
  async remove(id: string) {
    const existingStore = await this.prisma.store.findUnique({
      where: {
        id,
      },
    });

    if (!existingStore) {
      throw new NotFoundException(`No Store data found with these ${id}`);
    }

    const deleteStore = await this.prisma.store.delete({
      where: {
        id,
      },
    });

    if (deleteStore)
      return {
        message: 'Store Deleted Successfully',
      };
  }
}
