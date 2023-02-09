import { Movie, Timeline } from "@/_shared/types"
import { useState } from "react"

type TimelineEditor = () => {
  timeline: Timeline
  addMovie: (movie: Movie) => void
}

export const useTimelineEditor: TimelineEditor = () => {
  const [timeline, setTimeline] = useState<Timeline>({
    id: "1",
    title: "MCU",
    movies: [],
  })

  const addMovie = (movie: Movie) => {
    setTimeline((prev) => ({
      ...prev,
      movies: [...prev.movies, movie],
    }))
  }

  return {
    timeline,
    addMovie,
  }
}
