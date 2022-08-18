import axios, { AxiosRequestConfig } from 'axios';
import ProductCard from 'components/ProductCard';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Movies } from 'types/movies';
import { SpringPage } from 'types/spring-page';
import { BASE_URL, getAuthData } from 'util/requests';

import './styles.css';

const SelectMovies = () => {
  const [movies, setMovies] = useState<SpringPage<Movies>>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: BASE_URL + '/movies',
      headers: {
        Authorization: `Bearer ${getAuthData().access_token}`,
      },
    };

    axios(params).then((response) => {
      setMovies(response.data);
    });
  }, []);

  return (
    <div className="container my-4 movies-container">
      <div className="row movie-title-container">
        <h4>Lista de filmes</h4>
      </div>

      <div className="row list-movies">
        {movies?.content.map((movie) => (
          <div className="col-sm-6 col-lg-4 col-xl-3" key={movie.id}>
            <Link to={'/movies/' + movie?.id}>
              <ProductCard movies={movie} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectMovies;
