import { RootState } from "@/store"
import { Movie, MovieId } from "@/_shared/types"
import { FC } from "react"
import { useSelector, useDispatch } from "react-redux"
import { TimelineComponent } from "./component"
import { addMovieToDraft, reorderMoviesInDraft } from "./store"

export const TimelineContainer: FC = () => {
  const dispatch = useDispatch()
  const timeline = useSelector(
    (state: RootState) => state.timeline.draft.timeline
  )
  const movies = useSelector((state: RootState) => state.timeline.movies)
  const characters = useSelector(
    (state: RootState) => state.timeline.characters
  )

  const handleAddMovie = (movieId: MovieId, order: number) => {
    dispatch(addMovieToDraft({ movieId, order }))
  }

  const handleReorderMovies = (movieId: MovieId, order: number) => {
    dispatch(reorderMoviesInDraft({ movieId, order }))
  }

  return (
    <TimelineComponent
      timeline={timeline}
      movies={movies}
      characters={characters}
      addMovie={handleAddMovie}
      reorderMovies={handleReorderMovies}
    />
  )
}
