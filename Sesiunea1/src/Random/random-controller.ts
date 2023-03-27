import { Controller, Get, Res } from '@nestjs/common';
import { RandomService } from './random-service';

@Controller('random')
export class RandomController {
  constructor(private readonly randomService: RandomService) {}

  @Get('/quote')
  getQuote() {
    return this.randomService.getQuote();
  }

  @Get('/photo')
  getPhoto(@Res() response) {
    return this.randomService.getPhoto(response);
  }
}
