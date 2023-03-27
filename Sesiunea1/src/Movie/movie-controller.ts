import { Controller, Get, Param, Query } from '@nestjs/common';
import { MovieService } from './movie-service';

@Controller('movie')
export class MovieController {
    constructor(private readonly movieService: MovieService) {}

    @Get('/getTitleAndId')
    getTitleAndId(@Query('sort') sort) {
        return this.movieService.getTitleAndId(sort);
    }

    @Get('/movieDetails/:id')
  getMovieDetails(@Param('id') id) {
    return this.movieService.getMovieDetails(id);
  }
}
