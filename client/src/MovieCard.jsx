import React, { useEffect, useState } from 'react';

const MovieCard = ({ movie, showtimes }) => {

    // get the synopsis through an API call to 'omdb'
    const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=d97bcc2f';
    let synop = '';
    const searchSynop = async () => {
        const response = await fetch(`${API_URL}&t=${movie.title}`);
        const data = await response.json();
        //console.log(data);
        synop = data.Plot;
    };
    useEffect(() => {
        searchSynop();
    }, []);

    return (
        <div className="movie" 
            onClick={() => {
                alert(synop);
            }}
        >
            <div>
            </div>

            <div>
                <img src={movie.poster} alt={movie.Title} />
            </div>

            <div>
                <span>{movie.rating}</span>
                <h3>{movie.title}</h3>
                {showtimes[movie.id] != null
                    ? (
                        <>
                            {showtimes[movie.id].map((showtime) => 
                                <h4>{showtime}</h4>
                            )}
                        </>
                    ) :
                    (

                        <h4>No sessions found</h4>
                    )
                }
            </div>
            
        </div>
        
    );
}

export default MovieCard;