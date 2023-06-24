import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class MushroomDto {
  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
  })
  name: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
  })
  species: string;

  @IsOptional()
  @IsBoolean()
  @ApiProperty({
    type: Boolean,
  })
  edible: boolean;
}
