import { BadRequestException, Injectable } from '@nestjs/common';
import { UpdateStoreDto } from './dto/update-store.dto';
import { CreateStoreDto } from './dto/create-store.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StoreService {
  constructor(private prisma: PrismaService) {}

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

  findAll() {
    return `This action returns all store`;
  }

  findOne(id: number) {
    return `This action returns a #${id} store`;
  }

  update(id: number, updateStoreDto: UpdateStoreDto) {
    return `This action updates a #${id} store`;
  }

  remove(id: number) {
    return `This action removes a #${id} store`;
  }
}
