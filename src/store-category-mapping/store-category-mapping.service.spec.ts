import { Test, TestingModule } from '@nestjs/testing';
import { StoreCategoryMappingService } from './store-category-mapping.service';

describe('StoreCategoryMappingService', () => {
  let service: StoreCategoryMappingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoreCategoryMappingService],
    }).compile();

    service = module.get<StoreCategoryMappingService>(
      StoreCategoryMappingService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
