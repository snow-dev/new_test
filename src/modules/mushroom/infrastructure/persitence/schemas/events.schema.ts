import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class EventSchema {
  @Prop({
    type: String,
    required: true,
  })
  type: string;

  @Prop({ type: Date, required: true })
  time: Date;
}

export const EventSchemaSchema = SchemaFactory.createForClass(EventSchema);
