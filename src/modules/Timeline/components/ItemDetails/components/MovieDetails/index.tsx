import { Movie } from "@/_shared/types"
import { FC } from "react"

import styles from "./styles.module.scss"

type MovieDetailsProps = {
  item: Movie
}

export const MovieDetails: FC<MovieDetailsProps> = ({ item }) => {
  const { title, description, image } = item
  return (
    <div className={styles.movieDetailsWrapper}>
      <span>{title}</span>
      <span>{description}</span>
      <img src={image} alt={title} />
    </div>
  )
}
