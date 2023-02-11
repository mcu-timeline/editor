import { Character, Movie, Timeline } from "@/_shared/types"

export const createDummyListOfCharacters = (): { [id in string]: Character } => ({
  "a489a46b-9728-437b-bfd9-d9b8827a99ce": {
    id: "a489a46b-9728-437b-bfd9-d9b8827a99ce",
    type: "Character",
    name: "Tony Stark",
    image: "https://via.placeholder.com/150",
  },
  "adce4385-5465-40f7-8ceb-c2c7f2cf9348": {
    id: "adce4385-5465-40f7-8ceb-c2c7f2cf9348",
    type: "Character",
    name: "Thor",
    image: "https://via.placeholder.com/150",
  },
  "c2553b67-69bb-4136-b329-7c6732beaed1": {
    id: "c2553b67-69bb-4136-b329-7c6732beaed1",
    type: "Character",
    name: "Jarvis",
    image: "https://via.placeholder.com/150",
  },
})

export const createDummyListOfMovies = (): { [id in string]: Movie } => ({
  "396e5b8e-67cb-4cb5-a9e6-bb1f8c0fce87": {
    id: "396e5b8e-67cb-4cb5-a9e6-bb1f8c0fce87",
    type: "Movie",
    title: "Iron Man",
    description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    image: "https://via.placeholder.com/150",
    characters: [],
  },
  "1aae2238-cf1c-4073-a801-c951b8448ade": {
    id: "1aae2238-cf1c-4073-a801-c951b8448ade",
    type: "Movie",
    title: "Thor: Love & Thunder",
    description: "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.",
    image: "https://via.placeholder.com/150",
    characters: [],
  },
  "f72b2f47-d02c-4e7d-8be5-d9e47ec10ab7": {
    id: "f72b2f47-d02c-4e7d-8be5-d9e47ec10ab7",
    type: "Movie",
    title: "Avengers: Endgame",
    description: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    image: "https://via.placeholder.com/150",
    characters: [],
  },
})

export const createNewDummyTimeline = (): Timeline => {
  return {
    id: "cda984bb-ca18-4c15-ac42-975394f68c1c",
    title: "MCU Timeline",
    items: [
      {
        id: "396e5b8e-67cb-4cb5-a9e6-bb1f8c0fce87",
        watchNext: "1aae2238-cf1c-4073-a801-c951b8448ade",
      }
    ],
  }
}
