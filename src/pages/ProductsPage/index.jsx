import { Alert } from '../../components/Alert';
import { Filters } from '../../components/Filters';
import { Product } from '../../components/Product';
import { useAlert } from '../../hooks/useAlert';
import { useFilter } from '../../hooks/useFilter';
import { useLoading } from '../../hooks/useLoading';
import { useProducts } from '../../hooks/useProducts';

import './styles.scss';

import { css } from '@emotion/react';
import MoonLoader from 'react-spinners/MoonLoader';

const override = css`
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;

export function ProductsPage() {
  const { productsFiltered } = useFilter();
  const { products } = useProducts();

  const { message, success } = useAlert();
  const { loading } = useLoading();

  return (
    <>
      {message && <Alert alertText={message} type={success} />}

      <MoonLoader
        css={override}
        size={50}
        color={'#6464da'}
        loading={loading}
        speedMultiplier={0.5}
      />

      <main className="main">
        <Filters />

        <section className="main__products">
          <ol className="products__list">
            {productsFiltered.length > 0
              ? productsFiltered.map((product) => (
                  <Product
                    key={product.sku}
                    imageUrl={product.image}
                    description={product.name}
                    price={product.price}
                  />
                ))
              : products.map((product) => (
                  <Product
                    key={product.sku}
                    imageUrl={product.image}
                    description={product.name}
                    price={product.price}
                  />
                ))}
          </ol>
        </section>
      </main>
    </>
  );
}
