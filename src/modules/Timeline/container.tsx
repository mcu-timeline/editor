import { RootState } from "@/store"
import { Movie } from "@/_shared/types"
import { FC } from "react"
import { useSelector, useDispatch } from "react-redux"
import { TimelineComponent } from "./component"
import { addMovieToDraft } from "./store"

export const TimelineContainer: FC = () => {
  const dispatch = useDispatch()
  const timeline = useSelector(
    (state: RootState) => state.timeline.draft.timeline
  )
  const movies = useSelector((state: RootState) => state.timeline.movies)
  const characters = useSelector(
    (state: RootState) => state.timeline.characters
  )

  const handleAddMovie = (movie: Movie) => {
    dispatch(addMovieToDraft({ movie }))
  }

  return (
    <TimelineComponent
      timeline={timeline}
      movies={movies}
      characters={characters}
      addMovie={handleAddMovie}
    />
  )
}
