import React, { useEffect, useState } from 'react';
// d97bcc2f

const MovieCard = ({ movie, showtimes }) => {

    const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=d97bcc2f';
    let synop = '';
    const searchSynop = async () => {
        const response = await fetch(`${API_URL}&t=${movie.title}`);
        const data = await response.json();
        console.log(data);
        synop = data.Plot;
    };

    useEffect(() => {
        searchSynop();
    }, []);

    // console.log(movie.title);
    // console.log(movie.id);
    // console.log(showtimes);
    // console.log(showtimes[movie.id]);
    //console.log(showtimes);
    // const times = "No session times";
    // if (showtimes[movie.id].length > 0) {
    //     times = [];
    //     showtimes[movie.id].array.forEach(time => {
    //         times.push(time);
    //     });
    //     console.log(times);
    // }

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