import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDTO, RemoveMovieDTO, RateMovieDTO } from './dto/movie.dto';

@Controller('movies')

export class MoviesController {

    constructor(
        private readonly moviesService: MoviesService,
    ) { }

    /**
     * @api {get} /movies Get all movies
     * @apiName GetMovies
     * @apiGroup Movies
     */
    @Get()
    async getAllMovies() {
        return await this.moviesService.getMovies()
    }

    /**
     * @api {post} /movies Create new movie in db
     * @apiName CreateMovie
     * @apiGroup Movies
     *
     * @apiParam {Number} id Users unique ID.
     *
     * @apiSuccess {String} firstname Firstname of the User.
     * @apiSuccess {String} lastname  Lastname of the User.
     */
    @Post()
    async createMovie(@Body() createMovieDTO: CreateMovieDTO) {
        return await this.moviesService.addMovie(createMovieDTO)
    }

    @Delete(':id')
    async removeMovie(@Param('id') _id: string) {
        return await this.moviesService.removeMovie({ _id })
    }

    @Post('rate')
    async rateMovie(@Body() rateMovieDTO: RateMovieDTO) {
        return await this.moviesService.rateMovie(rateMovieDTO)
    }

    @Get('rate-average')
    async getAverage() {
        try {

            const data: any = await this.moviesService.aggregateAndReturnAverage();
            return data[0]['totalRating'];
        } catch (error) {
            return undefined;

        }
    }
}