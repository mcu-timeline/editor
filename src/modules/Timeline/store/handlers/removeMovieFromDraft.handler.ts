import { Movie, TimelineItem } from "@/_shared/types"
import { PayloadAction } from "@reduxjs/toolkit"
import { TimelineState } from ".."

export const handleRemoveMovieFromDraft = (
  state: TimelineState,
  action: PayloadAction<{ movieId: string }>
) => {
  const { movieId } = action.payload;
  const currentItems = state.draft.timeline.items;
  const newItems = currentItems.filter((item) => item.id !== movieId);

  state.draft.timeline.items = newItems;
}
