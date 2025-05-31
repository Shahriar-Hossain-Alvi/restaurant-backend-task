import { Controller, Post, Body, Get } from '@nestjs/common';
import { StoreCategoryMappingService } from './store-category-mapping.service';
import { CreateStoreCategoryMappingDto } from './dto/create-store-category-mapping.dto';

@Controller('store-category-mapping')
export class StoreCategoryMappingController {
  constructor(
    private readonly storeCategoryMappingService: StoreCategoryMappingService,
  ) {}

  @Post()
  create(@Body() createStoreCategoryMappingDto: CreateStoreCategoryMappingDto) {
    return this.storeCategoryMappingService.create(
      createStoreCategoryMappingDto,
    );
  }

  @Get()
  findAll() {
    return this.storeCategoryMappingService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.storeCategoryMappingService.findOne(id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateStoreCategoryMappingDto: UpdateStoreCategoryMappingDto,
  // ) {
  //   return this.storeCategoryMappingService.update(
  //     id,
  //     updateStoreCategoryMappingDto,
  //   );
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.storeCategoryMappingService.remove(id);
  // }
}
