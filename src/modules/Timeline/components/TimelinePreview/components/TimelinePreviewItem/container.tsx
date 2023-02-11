import { MovieId } from "@/_shared/types"
import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { TimeLinePreviewItemComponent } from "./component"
import { removeMovieFromDraft } from "../../../../store"
import { RootState } from "@/store"

type TimeLinePreviewItemProps = {
  movieId: MovieId
}

export const TimeLinePreviewItemContainer: FC<TimeLinePreviewItemProps> = ({
  movieId,
}) => {
  const dispatch = useDispatch()

  const movie = useSelector(
    (state: RootState) => state.timeline.movies[movieId]
  )

  const handleRemoveMovie = (movieId: string) => {
    dispatch(removeMovieFromDraft({ movieId }))
  }

  return (
    <TimeLinePreviewItemComponent
      movie={movie}
      removeMovie={handleRemoveMovie}
    />
  )
}
