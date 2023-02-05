import { FC } from 'react'
import classNames from 'classnames'
import { useDrag } from 'react-dnd'
import { MOVIE } from '../_shared/DnDItemTypes'

import styles from './styles.module.scss'

export interface MovieProps {
  name: string
}

interface DropResult {
  name: string
}

export const Movie: FC<MovieProps> = ({
  name,
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: MOVIE,
    item: { name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>()
      if (item && dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`)
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))

  const movieWrapperClassNames = classNames(styles.movieWrapper, {
    [styles.isDragging]: isDragging,
  });

  return (
    <div ref={drag} className={movieWrapperClassNames} data-testid={`movie`}>
      {name}
    </div>
  )
} 
