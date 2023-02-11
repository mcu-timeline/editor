import { Movie, TimelineItem } from "@/_shared/types"
import { PayloadAction } from "@reduxjs/toolkit"
import { TimelineState } from ".."

export const handleAddMovieToDraft = (
  state: TimelineState,
  action: PayloadAction<{ movie: Movie }>
) => {
  const { movie } = action.payload;
  const currentItems = state.draft.timeline.items;
  
  const newItem: TimelineItem = {
    id: movie.id,
    watchNext: movie.id,
  }

  state.draft.timeline.items = [
    ...currentItems,
    newItem,
  ]
}
