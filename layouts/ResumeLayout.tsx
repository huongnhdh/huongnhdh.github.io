import { ReactNode } from "react"
import Footer from "./Footer"
import Header from "./Header"

interface Props {
  children: ReactNode
}

export default function ResumeLayout({ children}: Props) {
  return <>
    <Header></Header>
    <main>{ children }</main>
    <Footer></Footer>
  </>
}