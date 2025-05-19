
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';
import { HydratedDocument } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
  @Prop()
  title: string;

  @Prop()
  @Exclude()
  description: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
