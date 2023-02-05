import { FC } from "react"

import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

import { Movie } from "./components/Movie"
import { Timeline } from "./components/Timeline"

export const Editor: FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Timeline />
      <Movie name="Iron Man" />
      <Movie name="Iron Man 2" />
      <Movie name="Iron Man 3" />
    </DndProvider>
  )
}
