import * as mongoose from 'mongoose';
import { Environment } from '../config';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<mongoose.Connection> =>
      await mongoose.connect(Environment.MONGO_URI),
  },
];
