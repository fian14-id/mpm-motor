import Header from "./components/Header"
import ProgramList from "./components/ProgramList"
import SpecialPromo from "./components/SpecialPromo"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <ProgramList />
        <SpecialPromo />
      </main>
      <Footer />
    </div>
  )
}

export default App

