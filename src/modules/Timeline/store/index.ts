import { createSlice } from "@reduxjs/toolkit"
import { Character, Movie, Timeline } from "@/_shared/types"
import {
  createDummyListOfCharacters,
  createDummyListOfMovies,
  createNewDummyTimeline,
} from "@/fixtures/Timeline"
import { handleAddMovieToDraft } from "./handlers/addMovieToDraft.handler"
import { handleRemoveMovieFromDraft } from "./handlers/removeMovieFromDraft.handler"

export interface TimelineState {
  characters: Record<string, Character>
  movies: Record<string, Movie>
  draft: {
    timeline: Timeline
  }
}

const initialState: TimelineState = {
  movies: createDummyListOfMovies(),
  characters: createDummyListOfCharacters(),
  draft: {
    timeline: createNewDummyTimeline(),
  },
}

export const timelineSlice = createSlice({
  name: "timelineEditor",
  initialState,
  reducers: {
    addMovieToDraft: handleAddMovieToDraft,
    removeMovieFromDraft: handleRemoveMovieFromDraft,
  },
})

// Action creators are generated for each case reducer function
export const { addMovieToDraft, removeMovieFromDraft } = timelineSlice.actions

export default timelineSlice.reducer
