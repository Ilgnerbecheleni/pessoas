/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {

constructor(private readonly userService:PrismaService){}

async  create(createUserDto: CreateUserDto) {
try {
  const user = await this.userService.user.create({data:createUserDto});
  return user;

} catch (error) {
  throw new  BadRequestException("Erro ao criar usuario");
}
}

 async findAll() {
   try {
    const users = await this.userService.user.findMany();
    return users;
   } catch (error) {
    throw new BadRequestException("Erro ao buscar usuarios");
   }
  }

  async findOne(id: number) {
    try {
      const users = await this.userService.user.findFirst({where:{id:id}});
      return users;
     } catch (error) {
      throw new BadRequestException("Erro ao buscar usuarios");
     }
  }

  async findCracha(cracha: string) {
    try {
      const user = await this.userService.user.findFirst({where:{cracha:cracha}});
      return user;
     } catch (error) {
      throw new BadRequestException("Erro ao buscar usuario");
     }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.userService.user.findFirst({where:{id}});
      if(!user){
        throw new BadRequestException('Usuario nao encontrado');
        }else{
          const updatedUser=await this.userService.user.update({where:{id}, data:updateUserDto})
          return updatedUser;
          }
        } catch (error) {
      throw new  BadRequestException("Erro ao criar usuario");
    }
  }

  async updateAcesso (id:number,acesso:boolean){
    try {
      const user = await this.userService.user.findFirst({where:{id}});
      if(!user){
        throw new BadRequestException('Usuario nao encontrado');
        }else{
          const updatedUser=await this.userService.user.update({where:{id}, data:{status:acesso}})
          return updatedUser;
          }
        } catch (error) {
      throw new  BadRequestException("Erro ao atualizar status do usuario");
    }
  }

  async remove(id: number) {
   
    try {
      const userdeleted = await this.userService.user.delete({where:{id}})
      return {message:`Usuario id ${userdeleted.id} deletado com sucesso`}
    } catch (error) {
      throw new  BadRequestException("Erro ao deletar usuario");
    }
    
  }
}
