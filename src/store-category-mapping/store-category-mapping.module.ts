import { Module } from '@nestjs/common';
import { StoreCategoryMappingService } from './store-category-mapping.service';
import { StoreCategoryMappingController } from './store-category-mapping.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [StoreCategoryMappingController],
  providers: [StoreCategoryMappingService],
})
export class StoreCategoryMappingModule {}
