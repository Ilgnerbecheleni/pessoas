/* eslint-disable prettier/prettier */
import { IsBoolean, IsDate, IsNumber, IsString } from "class-validator";

export class CreateAcessoDto {
  @IsDate()
  datahora: Date;
  @IsNumber()
  userId: number;
  @IsBoolean()
  entrada: boolean;
  @IsBoolean()
  saida: boolean;
  @IsString()
  cracha:string
}
