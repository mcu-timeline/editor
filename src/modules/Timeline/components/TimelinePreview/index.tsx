import { FC } from "react"

import { Timeline } from "@/_shared/types"

import { Droppable } from "react-beautiful-dnd"

import styles from "./styles.module.scss"
import { TimelinePreviewItem } from "./components/TimelinePreviewItem"

type TimelinePreviewProps = {
  timeline: Timeline
}

export const TimelinePreview: FC<TimelinePreviewProps> = ({
  timeline,
}) => {
  return (
    <Droppable droppableId="timeline">
      {(provided, snapshot) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={styles.timelineWrapper}
          >
            {timeline.items.map((item, index) => (
              <TimelinePreviewItem key={`${item.id}`} movieId={item.id} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )
      }}
    </Droppable>
  )
}
