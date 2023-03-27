import {HttpException, Injectable} from '@nestjs/common';

@Injectable()
export class MathService {
    substract(a, b){
        return a - b;
    }

    suma(a, b){
        return a + b;
    }

    multiply(a, b){
        return a * b;
    }

    divide(a, b){
        if(b === 0)
            throw new HttpException("Cu 0 cu se poate", 400);
        else
            return a / b;
    }

    complexOperation(op, list)
    {
        list = list.split(',');

        if(op !== 'add' && op !== 'substract' && op !== 'multiply' && op !== 'divide')
            throw new HttpException("Asta nu e operator", 400);

        if(op === 'divide' && list.includes('0'))
            throw new HttpException("Nu e voie cu 0", 400);

        let intList = list.map(e => +e);

        if(op === 'add') {
            const initialValue = 0;
            return intList.reduce(
                (accumulator, curentValue) => accumulator + curentValue,
                initialValue
            );
        }

        if(op === 'substract') {
            let rez = intList[0];
            for(let i = 1; i < intList.length; i++)
            {
                rez = rez - intList[i];
            }
            return rez;
        }

        if(op === "divide") {
            let rez = intList[0];
            for(let i = 1; i < intList.length; i++)
            {
                rez = (rez / intList[i]);
            }
            return rez;
        }

        if(op === 'multiply') {
            let rez = intList[0];
            for(let i = 1; i < intList.length; i++)
            {
                rez = rez * intList[i];
            }
            return rez;
        }
    }

}
