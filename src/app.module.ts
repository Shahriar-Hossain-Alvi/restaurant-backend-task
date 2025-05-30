import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { StoreModule } from './store/store.module';
import { StoreCategoryModule } from './store-category/store-category.module';

@Module({
  imports: [StoreModule, PrismaModule, StoreCategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
