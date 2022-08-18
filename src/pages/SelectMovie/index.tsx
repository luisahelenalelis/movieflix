import axios, { AxiosRequestConfig } from 'axios';
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
      url: BASE_URL + "/movies",
      headers: { 
        'Authorization': `Bearer ${getAuthData().access_token}`,
      }
    };

    axios(params)
      .then((response) => {
        setMovies(response.data);
      });
  }, []);


  return (
    <div className="main-movies-container">
      <h4>Tela listagem de filmes</h4>
      <div className="list-movies">
        {movies?.content.map((movie) => (
          <Link to={"/movies/" + movie?.id}>{movie?.title}</Link>
        ))}
      </div>
    </div>
  );
};

export default SelectMovies;
