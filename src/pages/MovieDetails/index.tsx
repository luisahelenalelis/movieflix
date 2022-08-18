import { ReactComponent as Star } from 'assets/images/star.svg';

import './styles.css';

const Details = () => {
  return (
    <div className="details-container">
      <h4>Tela detalhes do filme id: 1</h4>
      <div className="base-card product-details-card">
        <input
          type="text"
          className={`form-control base-input `}
          placeholder="Deixe sua avaliação aqui"
          name="username"
        />
        <div className="details-submit">
          <a href="/">Salvar Avaliação</a>
        </div>
      </div>
      <div className="base-card comment-container">
        <div className="detail-comment">
          <span>
            <Star />
          </span>
          <span>Maria Silva</span>
          <p>
            Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
          </p>
        </div>
        <div className="detail-comment">
          <span>
            <Star />
          </span>
          <span>Maria Silva</span>
          <p>
            Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
