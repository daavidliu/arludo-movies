import React, { useEffect, useState } from 'react';

import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';
import logo from './pngwing.com.png';

const API_URL = 'localhost:5001';

function App() {

    const [movies, setMovies] = useState([]);
    const [showtimes, setShowtimes] = useState([]);
    const [curShowtimes, setCurShowtimes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [curTheatre, setCurTheatre] = useState('Arclight');
    const [rating, setRating] = useState('all');

    const searchMovies = async () => {
        await console.log("searching movies: " + searchTerm);
        const response = await fetch('/movies');
        const data = await response.json();
        let filtered = await data.movies.filter((movie) => (containsString(movie.title, searchTerm)));
        //console.log(filtered);
        await setMovies(filtered);
        await setShowtimes(data.showtimes);
        const curShowtimes = await data.showtimes.filter(theatre => theatre.name === curTheatre)[0].showtimes;
        await setCurShowtimes(curShowtimes);
        //console.log(curShowtimes);
        await filterMovies();
    };

    function containsString(str1, str2) {
        const pattern = new RegExp(str2.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s/g, ''), 'i');
        const value = pattern.test(str1.replace(/\s/g, ''));
        //console.log(str1 + " " + str2 + " : " + value)
        return value;
    }

    //containsString('the amazing spider man', 'spiderman');

    const filterMovies = () => {
        if (rating !== 'all') {
            //console.log(movies);
            //console.log('filtering for ' + rating);
            let filtered = movies.filter((movie) => (movie.rating === rating));
            //console.log(filtered);
            setMovies(filtered);
        };
    };

    const changeRating = (change) => {
        //console.log("this is the change function");
        if (change !== rating) {
            setRating(change);
            //console.log('changing rating to ' + rating);
        } else if (change === rating) {
            setRating('all');
            //console.log('changing rating to ' + rating);
        };
        //console.log('rating changed to ' + rating);
        

    };

    useEffect(() => {
        searchMovies('');
    }, [searchTerm, curTheatre, rating]); 

    return (
        <div className="app">
            <img className='logo' src={logo} alt="logo"/>
            <h1>Moooovies App</h1> 
            <div className="search">
                <input
                    placeholder={ "search movies at " + curTheatre}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img 
                src={SearchIcon}
                alt="search"
                onClick={()=> {
                    //searchMovies(searchTerm);
                    //console.log("search");
                }}
                />
            </div>

            <div className="filters">
                {showtimes?.length > 0
                    ? (
                        <div className="container">
                            {showtimes.map((showtime) => 
                                <button 
                                    className={showtime.name === curTheatre ? 'filter-button active' : 'filter-button'} 
                                    onClick={ () => setCurTheatre(showtime.name)}
                                >
                                    {showtime.name}
                                </button>
                            )}
                        </div>
                    ) :
                    (
                        <div className="empty">
                            <h2>No theatres found</h2>
                        </div>
                    )
                }
            </div>

            <div className="filters">
                <button 
                    className={'G' === rating ? 'filter-button active' : 'filter-button'} 
                    onClick={ () => changeRating('G')}
                >
                    G
                </button>
                <button 
                    className={'PG-13' === rating ? 'filter-button active' : 'filter-button'} 
                    onClick={ () => changeRating('PG-13')}
                >
                    PG-13
                </button>
                <button 
                    className={'R' === rating ? 'filter-button active' : 'filter-button'} 
                    onClick={ () => changeRating('R')}
                >
                    R
                </button>
            </div>
            
            <div className='movies'>
                {movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie) => 
                                <MovieCard movie={movie} showtimes={curShowtimes}/>
                            )}
                        </div>
                    ) :
                    (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )
                }
            </div>

        </div>
    );
}

export default App;