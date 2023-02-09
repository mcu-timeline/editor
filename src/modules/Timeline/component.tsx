import { FC, useState } from "react"
import { usePathname } from "next/navigation"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

import { Character, ItemTypes, Movie, Timeline } from "@/_shared/types"

import { ItemPreview } from "./components/ItemPreview"
import { TimelinePreview } from "./components/TimelinePreview"
import { ItemDetails } from "./components/ItemDetails"

import styles from "./styles.module.scss"

type TimelineComponentProps = {
  timeline: Timeline,
  addMovie: (movie: Movie) => void,
}

export const TimelineComponent: FC<TimelineComponentProps> = ({
  timeline,
  addMovie,
}) => {
  const pathname = usePathname()
  const query = pathname ? pathname.split("/") : []
  const timelineId = query[2]

  const [currentlyEditedItemId, setCurrentlyEditedItemId] = useState("")
  const [currentlyEditedItemType, setCurrentlyEditedItemType] = useState("")

  const [currentlyDisplayedList, setCurrentlyDisplayedList] = useState<
    "Movie" | "Characters"
  >("Movie")

  console.log({ timelineId })

  const handleItemClick = (id: string, type: "Character" | "Movie") => {
    setCurrentlyEditedItemType(type)
    setCurrentlyEditedItemId(id)
  }

  const handleDetailsClose = () => {
    setCurrentlyEditedItemId("")
    setCurrentlyEditedItemType("")
  }

  const movies: { [id in string]: Movie } = {
    "1": {
      id: "1",
      type: "Movie",
      title: "Iron Man 1",
      description: "Movie 1 description",
      image: "https://via.placeholder.com/150",
      characters: [],
    },
    "2": {
      id: "2",
      type: "Movie",
      title: "Iron Man 2",
      description: "Movie 2 description",
      image: "https://via.placeholder.com/150",
      characters: [],
    },
    "3": {
      id: "3",
      type: "Movie",
      title: "Iron Man 3",
      description: "Movie 3 description",
      image: "https://via.placeholder.com/150",
      characters: [],
    },
  }

  const characters: { [id in string]: Character } = {
    "1": {
      id: "1",
      type: "Character",
      name: "Tony Stark",
      image: "https://via.placeholder.com/150",
    },
    "2": {
      id: "2",
      type: "Character",
      name: "Thor",
      image: "https://via.placeholder.com/150",
    },
    "3": {
      id: "3",
      type: "Character",
      name: "Jarvis",
      image: "https://via.placeholder.com/150",
    },
  }

  const renderCharacters = () => {
    return Object.values(characters).map((character) => (
      <ItemPreview
        key={character.id}
        id={character.id}
        title={character.name}
        onClick={handleItemClick}
        type={ItemTypes.CHARACTER}
      />
    ))
  }

  const renderMovies = () => {
    return Object.values(movies).map((movie) => (
      <ItemPreview
        key={movie.id}
        id={movie.id}
        title={movie.title}
        onClick={handleItemClick}
        type={ItemTypes.MOVIE}
      />
    ))
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.contentWrapper}>
        <div className={styles.moviesWrapper}>
          <div>
            <button onClick={() => setCurrentlyDisplayedList("Movie")}>
              Shows
            </button>
            <button onClick={() => setCurrentlyDisplayedList("Characters")}>
              Characters
            </button>
          </div>
          <div>
            <input placeholder="Search" />
          </div>
          {currentlyDisplayedList === "Movie"
            ? renderMovies()
            : renderCharacters()}
        </div>
        <TimelinePreview timeline={timeline} addMovie={addMovie} />
        <div className={styles.itemDetailsWrapper}>
          {currentlyEditedItemId && currentlyEditedItemType ? (
            <ItemDetails
              item={
                currentlyEditedItemType === "Movie"
                  ? movies[currentlyEditedItemId]
                  : characters[currentlyEditedItemId]
              }
              onClose={handleDetailsClose}
            />
          ) : (
            <div>No details available</div>
          )}
        </div>
      </div>
    </DndProvider>
  )
}
