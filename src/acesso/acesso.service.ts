/* eslint-disable prettier/prettier */
import {  BadRequestException, Injectable } from '@nestjs/common';
import { CreateAcessoDto } from './dto/create-acesso.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AcessoService {
  constructor(
    private readonly acessoService: PrismaService,
    private readonly userService: UserService,
  ) {}

  async create(createAcessoDto: CreateAcessoDto) {
    try {
      const usuario = await this.userService.findCracha(createAcessoDto.cracha );
      if (!usuario){
        throw new BadRequestException('Usuário não encontrado');
      }
      if(!usuario.ativo){
        throw new BadRequestException("O usuário está inativo");
      }
      if(!usuario.status){
        const acesso = await this.acessoService.acesso.create({data:{...createAcessoDto,tipo:'Entrada'}})
        const userUpdated = await this.userService.updateAcesso(usuario.id,false);
        return acesso;
      }
      else{
        const acesso = await this.acessoService.acesso.create({data:{...createAcessoDto,tipo:'Saída'}});
        const userUpdated = await this.userService.updateAcesso(usuario.id,false);
        return acesso;
    
    }
    
  }catch (error) {
      throw new BadRequestException('Falha ao cadastrar acesso');
    }
  }

  async findAll() {
   try {
    const acessos = await this.acessoService.acesso.findMany();
    return acessos;
   } catch (error) {
    throw new BadRequestException("erro ao busca acessos")
   }
  }

 async findOne(id: number) {
    try {
      const acessos = await this.acessoService.acesso.findFirst({where:{id}});
      return acessos;
     } catch (error) {
      throw new BadRequestException("erro ao busca acessos")
     }
  }
}
