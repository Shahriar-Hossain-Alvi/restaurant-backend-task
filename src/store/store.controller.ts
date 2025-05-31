import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StoreService } from './store.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';

@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  // create store
  @Post()
  create(@Body() createStoreDto: CreateStoreDto) {
    return this.storeService.create(createStoreDto);
  }

  // all store data for lists page
  @Get()
  findAll() {
    return this.storeService.findAll();
  }

  // all store data with every field in the model
  @Get('/allStoreData')
  findAllStoreData() {
    return this.storeService.findAllStoreData();
  }

  @Get('/storeCategory')
  findAllStoreWithCategories() {
    return this.storeService.findStoreWithCategories();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStoreDto: UpdateStoreDto) {
    return this.storeService.update(id, updateStoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storeService.remove(id);
  }
}
