import { FC } from "react"
import { useDrag } from "react-dnd"
import classNames from "classnames"

import { ItemTypes } from "@/_shared/types"

import styles from "./styles.module.scss"

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
  const [{ isDragging }, drag] = useDrag(() => ({
    type,
    item: { title },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>()
      if (item && dropResult) {
        console.log(`You dropped ${item.title} into ${dropResult.title}!`)
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))

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
