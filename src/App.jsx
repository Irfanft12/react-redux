import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from "./components/footer/Footer"
import Home from "./components/home/Home"
import MovieDetail from "./components/movieDetail/MovieDetail"
import PageNotFound from "./components/pageNotFound/PageNotFound"
import './app.scss'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/movie-detail/:imbdId' element={<MovieDetail />} />
            <Route path='*'  element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
