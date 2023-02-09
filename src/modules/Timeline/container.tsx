import { FC } from "react"
import { TimelineComponent } from "./component"
import { useTimelineEditor } from "./hooks/useTimelineEditor"

export const TimelineContainer: FC = () => {
  const { timeline, addMovie } = useTimelineEditor()

  return <TimelineComponent timeline={timeline} addMovie={addMovie} />
}
