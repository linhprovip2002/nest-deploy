import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

export const getMongoConfig = (): MongooseModuleAsyncOptions => {
  return {
    imports: [ConfigModule],
    useFactory: async () => ({
      uri: process.env.DATABASE_URL,
    }),
    inject: [ConfigService],
  };
};
