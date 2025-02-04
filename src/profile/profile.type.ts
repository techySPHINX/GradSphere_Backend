import { ObjectType, Field } from '@nestjs/graphql';
import { Channel, Server } from 'src/server/types';

@ObjectType()
export class Profile {
  @Field()
  id: number;

  @Field({ nullable: true })
  email: string | undefined;

  @Field({ nullable: true })
  name: string;

  @Field(() => [Server], { nullable: 'itemsAndList' })
  servers: Server[];

  @Field()
  imageUrl: string;

  @Field(() => [Channel], { nullable: 'itemsAndList' })
  channels: Channel[];
}