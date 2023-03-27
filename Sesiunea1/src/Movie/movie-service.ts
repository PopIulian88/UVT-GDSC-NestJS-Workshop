import { Injectable } from '@nestjs/common';

@Injectable()
export class MovieService {
    listMovie = [
    {
      id: 1,
      name: 'The Avangers',
      description: 'Un film cu super eroi, wow',
      actori: ['Actor1', 'Actor2', 'Actor3'],
    },
    {
      id: 2,
      name: 'The Matrix',
      description: 'The real world',
      actori: ['Actor1Matrix', 'Actor2Matrix', 'Actor3Matrix'],
        },
    {
            id: 3,
      name: 'King Shaman',
      description: 'Anime kind of stuff',
      actori: ['Yoh', 'Bason', 'Horo Horo'],
    },
    ]

    getTitleAndId(sort){

        if(sort)
        {
            if (sort === 'desc') {
                return this.listMovie.sort((a, b) => b.name.localeCompare(a.name)).
                    map(e => ({id: e.id, title: e.name}));
            } else if (sort === 'asc') {
                return this.listMovie.sort((a, b) => a.name.localeCompare(b.name)).
                    map(e => ({id: e.id, title: e.name}));;
            }
        }
        return this.listMovie.map(e => ({id: e.id, title: e.name}))
    }

    getMovieDetails(id){
    return this.listMovie.find((e) => e.id === +id);
    }
}
