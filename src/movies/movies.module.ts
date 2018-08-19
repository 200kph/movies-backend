import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { movieProviders } from './movies.providers';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
    imports: [DatabaseModule],
    controllers: [MoviesController],
    components: [MoviesService, ...movieProviders],
})
export class MoviesModule { }
