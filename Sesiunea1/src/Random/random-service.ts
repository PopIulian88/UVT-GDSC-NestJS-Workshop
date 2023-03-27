import { Injectable } from '@nestjs/common';
import {response} from "express";
import {randomInt} from "crypto";
import * as fs from "fs";

@Injectable()
export class RandomService {



    randomQuote = [
        "Ai n-ai mingea, dai la poarta",
        "Cateodata pierzi, uneori nu castigi",
        "Parerea mea",
        "Cine se scoala de dimineata nu merge de multe ori la apa"
    ]

    randomPhoto = [
        "Meme1.jpg",
        "Meme2.jpg",
        "Meme3.jpg",
        "Meme4.png",
    ]
    
    getQuote(){
        
        // fetch("https://type.fit/api/quotes")
        //     .then(response => response.json())
        //     .then(data => console.log(data[this.randNum].text));
        let randNum = Math.floor(Math.random() * 4);
        return this.randomQuote[randNum];

    }

    getPhoto(response) {
        let randNum = Math.floor(Math.random() * 4);

        const fileStream = fs.createReadStream('./src/Random/Photos/'+this.randomPhoto[randNum]);
        fileStream.pipe(response);
    }
}
