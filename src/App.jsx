import { BrowserRouter, Routes, Route } from "react-router";

import './sass/main.scss';

import NavBar from './components/atoms/NavBar/NavBar.jsx';
import Home from './pages/Home/Home.jsx';
import Movies from './pages/Movies/Movies.jsx';
import TvSeries from './pages/TvSeries/TvSeries.jsx';
import BookmarkMedia from './pages/BookmarkMedia/BookmarkMedia.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv_series" element={<TvSeries />} />
        <Route path="/bookmark" element={<BookmarkMedia />} />
      </Routes>
    </BrowserRouter>
  )
}