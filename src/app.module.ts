import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';

/* imports - Connection to database(mlab in this case)*/
@Module({
  imports: [

    MoviesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
