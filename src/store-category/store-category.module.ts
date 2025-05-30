import { Module } from '@nestjs/common';
import { StoreCategoryService } from './store-category.service';
import { StoreCategoryController } from './store-category.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [StoreCategoryController],
  providers: [StoreCategoryService],
})
export class StoreCategoryModule {}
