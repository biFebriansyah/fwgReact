import React, { useEffect, useState } from 'react'
import Header from '../../component/header'
import Cards from '../../component/cards'
import card1 from '../../assets/card1.png'
import axios from 'axios'

function Movie() {
    const [genres, setGenres] = useState([])
    const [movies, setMovies] = useState([])
    const [filter, setFilter] = useState('')

    const getGenres = async () => {
        try {
            const { data } = await axios.get('http://localhost:8000/genre')
            setGenres(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getMovies = async () => {
        try {
            const { data } = await axios.get(`http://localhost:8000/movie?limit=10&page=1&genre=${filter}`)
            setMovies(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getGenres()
    }, [])

    useEffect(() => {
        getMovies()
    }, [filter])

    const changeFilter = (v) => {
        if (v.target.value !== 'All') {
            setFilter(v.target.value)
        } else {
            setFilter('')
        }
    }

    return (
        <>
            <Header />
            <section className="bg-graysmoth">
                <div className="mx-auto flex flex-col max-w-7xl items-center justify-between p-5 py-10">
                    <div className="flex justify-between w-full items-center">
                        <h2 className="md:text-2xl xs:text-1xl font-medium">List Movie</h2>
                        <div className="flex justify-between w-4/12 ">
                            <select onChange={changeFilter} className="select select-ghost max-w-xs">
                                <option selected>All</option>
                                {genres.map((v) => {
                                    return <option>{v.genre_name}</option>
                                })}
                            </select>
                            <input type="text" placeholder="Search Movie Name" className="input input-bordered max-w-xs" />
                        </div>
                    </div>
                </div>
                <div className="mx-auto flex flex-col max-w-7xl items-center justify-between">
                    <div className="flex justify-between w-full items-center">
                        <button class="btn btn-primary w-32	">October</button>
                        <button class="btn btn-outline btn-primary w-32	">November</button>
                        <button class="btn btn-outline btn-primary w-32	">December</button>
                        <button class="btn btn-outline btn-primary w-32	">January</button>
                        <button class="btn btn-outline btn-primary w-32	">February</button>
                        <button class="btn btn-outline btn-primary w-32	">March</button>
                        <button class="btn btn-outline btn-primary w-32	">April</button>
                        <button class="btn btn-outline btn-primary w-32	">May</button>
                    </div>
                </div>
                <div className="bg-white mx-auto flex flex-wrap	max-w-7xl items-center justify-around p-5 m-10">
                    {movies ? (
                        movies.map((v) => {
                            return <Cards id={v.movie_id} image={v.movie_banner} name={v.movie_name} genre={v.genres} />
                        })
                    ) : (
                        <h1>Data not found</h1>
                    )}
                </div>
            </section>
        </>
    )
}

export default Movie
