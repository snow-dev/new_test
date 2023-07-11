import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SolkosDto {
  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
  })
  clients: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({
    type: Number,
  })
  year: number;

  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
  })
  zones: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
  })
  regions: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
  })
  operativeUnits: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
  })
  distribuidor: string;
}
