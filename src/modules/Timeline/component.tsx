import { FC, useState } from "react"
import {
  DragDropContext,
  Droppable,
  OnDragEndResponder,
  resetServerContext,
} from "react-beautiful-dnd"

import { Character, Movie, MovieId, Timeline } from "@/_shared/types"

import { ItemPreview } from "./components/ItemPreview"
import { TimelinePreview } from "./components/TimelinePreview"

import styles from "./styles.module.scss"

type TimelineComponentProps = {
  timeline: Timeline
  movies: Record<string, Movie>
  characters: Record<string, Character>
  addMovie: (movieId: MovieId, order: number) => void
  reorderMovies: (movieId: MovieId, order: number) => void
}

export const TimelineComponent: FC<TimelineComponentProps> = ({
  timeline,
  movies,
  addMovie,
  reorderMovies,
}) => {
  resetServerContext()

  const renderMovies = () => {
    return Object.values(movies).map((movie, index) => (
      <ItemPreview
        index={index}
        key={`MOVIE-${movie.id}`}
        id={movie.id}
        title={movie.title}
      />
    ))
  }

  const handleDragEnd: OnDragEndResponder = (dropResult) => {
    console.log({ dropResult })
    const { source, destination, draggableId } = dropResult
    console.log({ source, destination, draggableId })

    if (!destination) {
      alert("No destination")
      return
    }

    if (!draggableId) {
      alert("No draggableId")
      return
    }

    const parts = draggableId.split("::")

    if (parts.length === 2) {
      const movieId = draggableId.split("::")[1]
      addMovie(movieId, destination.index)
    }

    if (parts.length === 3) {
      const movieId = draggableId.split("::")[2] 
      reorderMovies(movieId, destination.index)
    }
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className={styles.contentWrapper}>
        <div className={styles.moviesWrapper}>
          <div>
            <input placeholder="Search" />
          </div>
          <Droppable droppableId="movies">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {renderMovies()}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
        <TimelinePreview timeline={timeline} />
      </div>
    </DragDropContext>
  )
}
