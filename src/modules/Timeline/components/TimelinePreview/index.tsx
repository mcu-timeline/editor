import { FC } from "react"
import { useDrop } from "react-dnd"
import { ItemTypes, Movie, Timeline } from "@/_shared/types"

import styles from "./styles.module.scss"

type TimelinePreviewProps = {
  timeline: Timeline
  addMovie: (movie: Movie) => void
}

export const TimelinePreview: FC<TimelinePreviewProps> = ({
  timeline,
  addMovie,
}) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.MOVIE,
    drop: (item: Movie, monitor) => {
      console.log({ item, canDrop: monitor.canDrop() })
      addMovie(item)
      return { title: "Timeline" }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  const isActive = canDrop && isOver

  return (
    <div data-testid="timeline" ref={drop} className={styles.timelineWrapper}>
      {timeline.movies.map((movie) => (
        <div key={movie.id}>
          <div>{movie.title}</div>
        </div>
      ))}
    </div>
  )
}
