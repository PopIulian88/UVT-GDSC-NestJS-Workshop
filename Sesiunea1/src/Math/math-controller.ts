import { Controller, Get, Param } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { MathService } from './math-service';

@Controller('math')
export class MathController {
  constructor(private readonly MathService: MathService) {}

  @Get('/substract/:a/:b')
  substract(@Param('a') a, @Param('b') b) {
    return this.MathService.substract(+a, +b);
  }

  @Get('suma/:a/:b')
  suma(@Param('a') a, @Param('b') b) {
    return this.MathService.suma(+a, +b);
  }

  @Get('multiply/:a/:b')
  multiply(@Param('a') a, @Param('b') b) {
    return this.MathService.multiply(a, b);
  }

  @Get('divide/:a/:b')
  divide(@Param('a') a, @Param('b') b) {
    return this.MathService.divide(a, b);
  }

  @Get('complexOperation/:op/:list')
  complexOperation(@Param('op') op, @Param('list') list) {
    return this.MathService.complexOperation(op, list);
  }
}
