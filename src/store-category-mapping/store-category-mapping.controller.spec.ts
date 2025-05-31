import { Test, TestingModule } from '@nestjs/testing';
import { StoreCategoryMappingController } from './store-category-mapping.controller';
import { StoreCategoryMappingService } from './store-category-mapping.service';

describe('StoreCategoryMappingController', () => {
  let controller: StoreCategoryMappingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoreCategoryMappingController],
      providers: [StoreCategoryMappingService],
    }).compile();

    controller = module.get<StoreCategoryMappingController>(
      StoreCategoryMappingController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
