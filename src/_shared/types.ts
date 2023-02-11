export type MovieId = string;
export type CharacterId = string;
export type TimelineId = string;

export type Character = {
  id: CharacterId;
  type: 'Character';
  name: string;
  image: string;
}

export type Movie = {
  id: MovieId;
  title: string;
  type: 'Movie',
  image: string;
  description: string;
  characters: Character[];
}

export type TimelineItem = {
  id: MovieId;
  watchNext: MovieId;
}

export type Timeline = {
  id: TimelineId;
  title: string;
  items: TimelineItem[];
}
