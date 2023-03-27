import { Module } from '@nestjs/common';
import {MathService} from "./math-service";
import {MathController} from "./math-controller";

@Module({
    imports: [],
    controllers: [MathController],
    providers: [MathService],
})
export class MathModule {}
