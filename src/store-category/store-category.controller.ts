import { Controller, Get, Post, Body } from '@nestjs/common';
import { StoreCategoryService } from './store-category.service';
import { CreateStoreCategoryDto } from './dto/create-store-category.dto';

@Controller('store-category')
export class StoreCategoryController {
  constructor(private readonly storeCategoryService: StoreCategoryService) {}

  @Post()
  create(@Body() createStoreCategoryDto: CreateStoreCategoryDto) {
    return this.storeCategoryService.create(createStoreCategoryDto);
  }

  @Get()
  findAll() {
    return this.storeCategoryService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.storeCategoryService.findOne(id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateStoreCategoryDto: UpdateStoreCategoryDto,
  // ) {
  //   return this.storeCategoryService.update(id, updateStoreCategoryDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.storeCategoryService.remove(id);
  // }
}
