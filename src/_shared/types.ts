export type Character = {
  id: string;
  name: string;
  image: string;
}

export type Movie = {
  id: string;
  title: string;
  image: string;
  description: string;
  characters: Character[];
}


export type Timeline = {
  id: string;
  title: string;
  movies: Movie[];
}
