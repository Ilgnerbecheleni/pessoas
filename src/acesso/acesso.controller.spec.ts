import { Test, TestingModule } from '@nestjs/testing';
import { AcessoController } from './acesso.controller';
import { AcessoService } from './acesso.service';

describe('AcessoController', () => {
  let controller: AcessoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcessoController],
      providers: [AcessoService],
    }).compile();

    controller = module.get<AcessoController>(AcessoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
