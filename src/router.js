import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './page/home'
import Movie from './page/movie'
import MovieD from './page/movie_detail'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie" element={<Movie />} />
                <Route path="/detail/:id" element={<MovieD />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
