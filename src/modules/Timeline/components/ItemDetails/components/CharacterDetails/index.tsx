import { Character, Movie } from "@/_shared/types"
import { FC } from "react"

import styles from "./styles.module.scss"

type CharacterDetailsProps = {
  item: Character
}

export const CharacterDetails: FC<CharacterDetailsProps> = ({ item }) => {
  const { name, image } = item
  return (
    <div className={styles.characterDetailsWrapper}>
      <span>{name}</span>
      <img src={image} alt={name} />
    </div>
  )
}
