import { Character, Movie } from "@/_shared/types"
import { CharacterDetails } from "./components/CharacterDetails"
import { MovieDetails } from "./components/MovieDetails"

import styles from "./styles.module.scss"

type GenericItem = {
  id: string
  type: "Movie" | "Character"
}

type ItemDetailsProps<TItem extends GenericItem> = {
  item: TItem
  onClose: () => void
}

export function ItemDetails<TItem extends GenericItem>({
  item,
  onClose,
}: ItemDetailsProps<TItem>) {
  const renderContent = () => {
    switch (item.type) {
      case "Movie":
        return <MovieDetails item={item as unknown as Movie} />
      case "Character":
        return <CharacterDetails item={item as unknown as Character} />
    }
  }

  return (
    <div>
      <div>
        <button onClick={onClose}>Close</button>
      </div>
      {renderContent()}
    </div>
  )
}
