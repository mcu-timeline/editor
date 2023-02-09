export enum ItemTypes {
  MOVIE = 'movie',
  CHARACTER = 'character',
}

export type Character = {
  id: string;
  type: 'Character';
  name: string;
  image: string;
}

export type Movie = {
  id: string;
  title: string;
  type: 'Movie',
  image: string;
  description: string;
  characters: Character[];
}


export type Timeline = {
  id: string;
  title: string;
  movies: Movie[];
}
