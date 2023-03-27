import { Module } from '@nestjs/common';
import { HelloWorldModule } from './HelloWorld/helloWorld-module';
import { MathModule } from './Math/math-module';
import { MovieModule } from './Movie/movie-module';
import { RandomModule } from './Random/random-module';

@Module({
  imports: [HelloWorldModule, MathModule, MovieModule, RandomModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
