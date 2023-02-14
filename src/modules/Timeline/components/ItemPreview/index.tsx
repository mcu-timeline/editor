import { FC } from "react"
import { Draggable } from "react-beautiful-dnd"

type MoviePreviewProps = {
  index: number
  id: string
  title: string
}

export const ItemPreview: FC<MoviePreviewProps> = ({
  index,
  id,
  title,
}) => {
  return (
    <Draggable draggableId={`MOVIE::${id}`} index={index} key={`${id}`}>
      {(provided, snapshot) => (
        <div
          key={`${id}`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <span>{title}</span>
        </div>
      )}
    </Draggable>
  )
}
