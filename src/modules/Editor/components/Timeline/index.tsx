import { FC } from "react"
import classNames from "classnames"

import { useDrop } from "react-dnd"
import { MOVIE } from "../_shared/DnDItemTypes"

import styles from "./styles.module.scss"

export const Timeline: FC = () => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: MOVIE,
    drop: () => ({ name: "Timeline" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  const isActive = canDrop && isOver

  const timelineWrapperClassNames = classNames(styles.timelineWrapper, {
    [styles.active]: isActive,
  });

  return (
    <div
      className={timelineWrapperClassNames}
      data-testid="dustbin"
      ref={drop}
    >
      {isActive ? "Release to drop" : "Drag a Movie here"}
    </div>
  )
}
