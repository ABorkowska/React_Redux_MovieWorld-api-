const key = "32a421ec";
export async function search(text) {
    return fetch(`http://www.omdbapi.com/?s=${text}&apikey=${key}`)
}
export async function getDetails(id) {
    return fetch(`http://www.omdbapi.com/?s=${id}&apikey=${key}`)
}

/*Response:
{"Title":"Harry Potter and the Deathly Hallows: Part 2",
"Year":"2011",
"Rated":"PG-13",
"Released":"15 Jul 2011",
"Runtime":"130 min",
"Genre":"Adventure, Fantasy, Mystery",
"Director":"David Yates",
"Writer":"Steve Kloves, J.K. Rowling",
"Actors":"Daniel Radcliffe, Emma Watson, Rupert Grint",
"Plot":"Harry (Daniel Radcliffe), Ron (Rupert Grint), and Hermione.....",
"Language":"English, Latin",
"Country":"United Kingdom, United States",
"Awards":"Nominated for 3 Oscars. 46 wins & 94 nominations total",
"Poster":"https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
"Ratings":[{"Source":"Internet Movie Database","Value":"8.2/10"},{"Source":"Rotten Tomatoes","Value":"96%"},{"Source":"Metacritic","Value":"85/100"}],
"Metascore":"85",
"imdbRating":"8.2",
"imdbVotes":"838,202",
"imdbID":"tt1201607",
"Type":"movie",
"DVD":"11 Nov 2011",
"BoxOffice":"$381,447,587",
"Production":"N/A",
"Website":"N/A",
"Response":"True"}*

401
{"Response":"False",
"Error":"Movie not found!"}
 */