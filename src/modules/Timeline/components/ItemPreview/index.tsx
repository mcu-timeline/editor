import { FC } from "react"
import { useDrag } from "react-dnd"
import classNames from "classnames"

import styles from "./styles.module.scss"
import { useDndDragControls, ItemTypes } from "@/_shared/hooks/useDnDControls"

type MoviePreviewProps = {
  id: string
  title: string
  type: ItemTypes
  onClick: (id: string, type: "Character" | "Movie") => void
}

interface DropResult {
  title: string
}

export const ItemPreview: FC<MoviePreviewProps> = ({
  id,
  title,
  type,
  onClick,
}) => {
  const { drag, isDragging } = useDndDragControls<{
    id: string
    title: string
    type: ItemTypes
  }>({ item: { id, title, type }, itemType: type })

  const listItemWrapperClassNames = classNames(styles.listItemWrapper, {
    [styles.isDragging]: isDragging,
  })

  return (
    <div key={id} className={listItemWrapperClassNames} ref={drag}>
      <span>{title}</span>
      <button
        onClick={() =>
          onClick(id, type === ItemTypes.CHARACTER ? "Character" : "Movie")
        }
      >
        Edit
      </button>
    </div>
  )
}
