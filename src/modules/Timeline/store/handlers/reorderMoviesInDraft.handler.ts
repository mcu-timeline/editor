import { MovieId, TimelineItem } from "@/_shared/types"
import { PayloadAction } from "@reduxjs/toolkit"
import { TimelineState } from ".."
import { mapWatchNext } from "./helpers/mapWatchNext"

export const handleReorderMoviesInDraft = (
  state: TimelineState,
  action: PayloadAction<{ movieId: MovieId; order: number }>
) => {
  const { movieId, order } = action.payload
  const currentItems = state.draft.timeline.items

  const newItem: TimelineItem = {
    id: movieId,
    watchNext: "",
  }

  const filteredItems = currentItems.filter((item) => item.id !== movieId)

  const newItems = [
    ...filteredItems.slice(0, order),
    newItem,
    ...filteredItems.slice(order),
  ]

  const newItemsWithWatchNext = mapWatchNext(newItems)

  state.draft.timeline.items = newItemsWithWatchNext
}
