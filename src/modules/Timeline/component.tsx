import { FC, useState } from "react"
import { usePathname } from "next/navigation"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

import { Character, Movie, Timeline } from "@/_shared/types"

import { ItemPreview } from "./components/ItemPreview"
import { TimelinePreview } from "./components/TimelinePreview"
import { ItemDetails } from "./components/ItemDetails"

import styles from "./styles.module.scss"
import { ItemTypes } from '@/_shared/hooks/useDnDControls'

type TimelineComponentProps = {
  timeline: Timeline,
  movies: Record<string, Movie>,
  characters: Record<string, Character>,
  addMovie: (movie: Movie) => void,
}

export const TimelineComponent: FC<TimelineComponentProps> = ({
  timeline,
  characters,
  movies,
  addMovie,
}) => {
  const [currentlyEditedItemId, setCurrentlyEditedItemId] = useState("")
  const [currentlyEditedItemType, setCurrentlyEditedItemType] = useState("")

  const [currentlyDisplayedList, setCurrentlyDisplayedList] = useState<
    "Movie" | "Characters"
  >("Movie")

  const handleItemClick = (id: string, type: "Character" | "Movie") => {
    setCurrentlyEditedItemType(type)
    setCurrentlyEditedItemId(id)
  }

  const handleDetailsClose = () => {
    setCurrentlyEditedItemId("")
    setCurrentlyEditedItemType("")
  }

  const renderCharacters = () => {
    return Object.values(characters).map((character) => (
      <ItemPreview
        key={`CHARACTER-${character.id}`}
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
        key={`MOVIE-${movie.id}`}
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
