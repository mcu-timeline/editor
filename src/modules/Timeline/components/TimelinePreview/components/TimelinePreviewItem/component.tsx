import { FC } from 'react'
import { Movie, MovieId } from '@/_shared/types'

type TimeLinePreviewItemProps = {
  movie: Movie
  removeMovie: (movieId: MovieId) => void;
}

export const TimeLinePreviewItemComponent: FC<TimeLinePreviewItemProps> = ({
  movie,
  removeMovie,
}) => {
  if (!movie) return null;

  return (
    <div>
      <div>{movie.title}</div>
      <div>
        <button onClick={() => removeMovie(movie.id)}>DELETE</button>
      </div>
    </div>
  )
}
