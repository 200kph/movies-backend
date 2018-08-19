import { Injectable, Inject } from '@nestjs/common';
import { Movie } from './interfaces/movie.interface';
import { Model } from 'mongoose';
import { CreateMovieDTO, RemoveMovieDTO, RateMovieDTO } from './dto/movie.dto';

@Injectable()
export class MoviesService {
    constructor(
        @Inject('MovieModelToken')
        private readonly movieModel: Model<Movie>,
    ) { }
    async getMovies(): Promise<Movie> {
        return await this.movieModel.find().exec();
    }

    async addMovie(addMovieDTO: CreateMovieDTO): Promise<any> {
        const newMovie = new this.movieModel(addMovieDTO);
        return await newMovie.save();
    }

    async removeMovie(removeMovieDTO: RemoveMovieDTO) {
        return await this.movieModel.findOneAndRemove({ _id: removeMovieDTO._id });
    }

    async rateMovie(rateMovieDTO: RateMovieDTO) {
        console.log(rateMovieDTO);

        return await this.movieModel.findByIdAndUpdate({ _id: rateMovieDTO._id }, {
            rating: rateMovieDTO.rating,
        }, { new: true });
    }

    async aggregateAndReturnAverage() {

        return await this.movieModel.aggregate([{

            $group: {
                _id: null,
                totalRating: {
                    $avg: '$rating',
                },
            },
        },
        ],
        );

    }
}