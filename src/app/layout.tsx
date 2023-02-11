"use client"
import { Provider } from "react-redux"
import { store } from "../store"

import "@/styles/global.scss"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  )
}
