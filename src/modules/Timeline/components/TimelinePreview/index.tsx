import { FC } from "react"

import { Movie, Timeline } from "@/_shared/types"
import { ItemTypes, useDnDDropControls } from "@/_shared/hooks/useDnDControls"

import styles from "./styles.module.scss"
import { TimelinePreviewItem } from './components/TimelinePreviewItem'

type TimelinePreviewProps = {
  timeline: Timeline
  addMovie: (movie: Movie) => void
}

export const TimelinePreview: FC<TimelinePreviewProps> = ({
  timeline,
  addMovie,
}) => {
  const { drop } = useDnDDropControls<Movie>({
    itemType: ItemTypes.MOVIE,
    onDrop: addMovie,
  })

  return (
    <div data-testid="timeline" ref={drop} className={styles.timelineWrapper}>
      {timeline.items.map((item) => (
        <TimelinePreviewItem key={`MOVIE-${item.id}`} movieId={item.id} />
      ))}
    </div>
  )
}
