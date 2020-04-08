
export const satisfiesGenreFilter = (genreFilter = [], movie) => {
  for (let i = 0; i < genreFilter.length; i++) {
    if ((movie.genreIds || []).indexOf(genreFilter[i]) === -1) {
      return false;
    }
  }

  return true;
}

export const satisfiesRatingFilter = (rating = 3, movie) => {
  return movie.voteAverage >= rating;
}

export const filterMovies = (movies, filter) => {
  if (!movies) {
    return movies;
  }
  return movies.filter(movie => (
    satisfiesGenreFilter(filter.genres, movie) && satisfiesRatingFilter(filter.rating, movie))
  );
}

export const getAvailableGenreIdsFromMovies = (movies = []) => {
  
  const idMap = {};

  
  const genreIds = [];

  movies.forEach(movie => {
    movie.genreIds.forEach(genreId => {

      if (!idMap[genreId]) {
        
        idMap[genreId] = true;
        genreIds.push(genreId);
      }
    })
  })

  return genreIds;
}
