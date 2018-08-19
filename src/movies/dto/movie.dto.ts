export interface CreateMovieDTO {
    readonly title: string;
    readonly rating: number;
}

export interface RemoveMovieDTO {
    readonly _id: string;
}

export interface RateMovieDTO {
    readonly _id: string;
    readonly rating: number;
}