import Nav from "./components/Nav"
import Banner from "./components/Banner"
import Cardsection from "./components/Cardsection"
import {ToastContainer} from "react-toastify"
import { Suspense } from "react"
import type { ITechnology } from "./technology"

const playersfetch = async (): Promise<ITechnology[]> => {
  const res = await fetch('/Carddata.json')
  const data = await res.json();
  return data
}
const playersPromise = playersfetch()

function App() {
    return (
    <>
    <Nav />
    <Banner />
    <Suspense fallback={<div>Loading...</div>}>
      <Cardsection playersPromise={playersPromise} />
    </Suspense>
    <ToastContainer />
  </>
)
}

export default App
