import { FC } from "react"
import { Movie, MovieId } from "@/_shared/types"
import { Draggable } from "react-beautiful-dnd"

type TimeLinePreviewItemProps = {
  movie: Movie
  index: number
  removeMovie: (movieId: MovieId) => void
}

export const TimeLinePreviewItemComponent: FC<TimeLinePreviewItemProps> = ({
  movie,
  index,
  removeMovie,
}) => {
  if (!movie) return null

  return (
    <Draggable
      draggableId={`TIMELINE::MOVIE::${movie.id}`}
      index={index}
      key={`TIMELINE::MOVIE::-${movie.id}`}
    >
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div>{movie.title}</div>
          <div>
            <button onClick={() => removeMovie(movie.id)}>DELETE</button>
          </div>
        </div>
      )}
    </Draggable>
  )
}
