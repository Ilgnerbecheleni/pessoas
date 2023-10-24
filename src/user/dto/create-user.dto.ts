import { IsBoolean, IsString, MinLength } from 'class-validator'

export class CreateUserDto {
  @IsString()
  @MinLength(5)
  nome: string
  @IsString()
  @MinLength(8)
  telefone: string
  @IsString()
  cracha: string
  @IsBoolean()
  ativo: boolean
}
