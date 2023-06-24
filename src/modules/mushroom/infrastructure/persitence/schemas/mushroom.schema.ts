import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type MushroomDocument = HydratedDocument<Mushroom>;

@Schema()
export class Mushroom {
  @Prop()
  name: string;

  @Prop()
  species: string;

  @Prop()
  edible: boolean;
}

export const MushroomSchema = SchemaFactory.createForClass(Mushroom);
