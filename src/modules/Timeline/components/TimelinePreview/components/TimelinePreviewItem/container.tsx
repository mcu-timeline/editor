import { MovieId } from "@/_shared/types"
import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { TimeLinePreviewItemComponent } from "./component"
import { removeMovieFromDraft } from "../../../../store"
import { RootState } from "@/store"

type TimeLinePreviewItemProps = {
  index: number;
  movieId: MovieId
}

export const TimeLinePreviewItemContainer: FC<TimeLinePreviewItemProps> = ({
  movieId,
  index,
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
      index={index}
      removeMovie={handleRemoveMovie}
    />
  )
}
