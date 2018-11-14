import * as mongoose from 'mongoose';
import { Environment } from '../config';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<mongoose> =>
      await mongoose.connect(Environment.MONGO_URI),
  },
];
