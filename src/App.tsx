import Nav from "./components/Nav"
import Banner from "./components/Banner"
import Cardsection from "./components/Cardsection"
import { Suspense } from "react"

const playersfetch = async () => {
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
  </>
)
}

export default App
