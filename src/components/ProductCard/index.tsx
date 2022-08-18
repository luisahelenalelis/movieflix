import './styles.css';

import { Movies } from 'types/movies';

type Props = {
  movies: Movies;
};

const ProductCard = ({ movies }: Props) => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={movies.imgUrl} alt={movies.title} />
      </div>
      <div className="card-botton-container">
        <h6>{movies.title}</h6>
      </div>
    </div>
  );
};

export default ProductCard;