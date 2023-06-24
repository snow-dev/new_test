import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ discriminatorKey: 'type' })
export class EventSchema {
  @Prop({
    type: String,
    required: true,
    enum: ['MushroomCreated', 'MushroomUpdated', 'MushroomDeleted'],
  })
  type: string;

  @Prop({ type: Date, required: true })
  time: Date;
}

export const EventSchemaSchema = SchemaFactory.createForClass(EventSchema);
