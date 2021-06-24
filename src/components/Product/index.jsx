import { currencyFormatter } from '../../utils/currencyFormatter';

import './styles.scss';

export function Product({ imageUrl, description, price }) {
  return (
    <li className="products__card card">
      <div className="card">
        <img className="card__img" src={imageUrl} alt="" />
        <p className="card__description">{description}</p>
        <p className="card__price">{currencyFormatter(price)}</p>
      </div>
    </li>
  );
}
