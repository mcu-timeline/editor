import { MovieId, TimelineItem } from "@/_shared/types"
import { current, PayloadAction } from "@reduxjs/toolkit"
import { TimelineState } from ".."

export const handleAddMovieToDraft = (
  state: TimelineState,
  action: PayloadAction<{ movieId: MovieId; order: number }>
) => {
  const { movieId, order } = action.payload
  const currentItems = state.draft.timeline.items

  const newItem: TimelineItem = {
    id: movieId,
    watchNext: "",
  }

  const newItems = [
    ...currentItems.slice(0, order),
    newItem,
    ...currentItems.slice(order),
  ]

  const newItemsWithWatchNext = newItems.map((item, index) => {
    return {
      ...item,
      watchNext: newItems[index + 1]?.id || "",
    }
  })

  state.draft.timeline.items = newItemsWithWatchNext
}
