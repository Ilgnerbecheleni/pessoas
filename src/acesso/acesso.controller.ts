/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { AcessoService } from './acesso.service';
import { CreateAcessoDto } from './dto/create-acesso.dto';


@Controller('acesso')
export class AcessoController {
  constructor(private readonly acessoService: AcessoService) {}

  @Post()
  create(@Body() createAcessoDto: CreateAcessoDto) {
    return this.acessoService.create(createAcessoDto);
  }

  @Get()
  findAll() {
    return this.acessoService.findAll();
  }

  @Get(':id')
  findOne( @Param('id', ParseIntPipe) id: number) {
    return this.acessoService.findOne(id);
  }

}
