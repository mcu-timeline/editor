import { MovieId, TimelineItem } from "@/_shared/types"
import { PayloadAction } from "@reduxjs/toolkit"
import { TimelineState } from ".."
import { mapWatchNext } from './helpers/mapWatchNext';

export const handleAddMovieToDraft = (
  state: TimelineState,
  action: PayloadAction<{ movieId: MovieId; order: number }>
) => {
  const { movieId, order } = action.payload
  const currentItems = state.draft.timeline.items

  const isAlreadyInTimeline = currentItems.some((item) => item.id === movieId);

  if (isAlreadyInTimeline) {
    alert("Movie is already in timeline");
    return;
  }

  const newItem: TimelineItem = {
    id: movieId,
    watchNext: "",
  }

  const newItems = [
    ...currentItems.slice(0, order),
    newItem,
    ...currentItems.slice(order),
  ]

  const newItemsWithWatchNext = mapWatchNext(newItems);

  state.draft.timeline.items = newItemsWithWatchNext
}
