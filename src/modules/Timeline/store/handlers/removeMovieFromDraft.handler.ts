import { Movie, TimelineItem } from "@/_shared/types"
import { PayloadAction } from "@reduxjs/toolkit"
import { TimelineState } from ".."
import { mapWatchNext } from './helpers/mapWatchNext';

export const handleRemoveMovieFromDraft = (
  state: TimelineState,
  action: PayloadAction<{ movieId: string }>
) => {
  const { movieId } = action.payload;
  const currentItems = state.draft.timeline.items;
  const newItems = currentItems.filter((item) => item.id !== movieId);

  const newItemsWithWatchNext = mapWatchNext(newItems);

  state.draft.timeline.items = newItemsWithWatchNext;
}
