/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { AcessoService } from './acesso.service';
import { AcessoController } from './acesso.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserModule } from 'src/user/user.module';

@Module({

  imports: [PrismaModule,UserModule],
  controllers: [AcessoController],
  providers: [AcessoService],
})
export class AcessoModule {}
