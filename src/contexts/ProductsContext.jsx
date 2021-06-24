import { createContext, useEffect, useState } from 'react';

import { fetchData } from '../service/ServiceUtils';
import { useAlert } from '../hooks/useAlert';
import { useLoading } from '../hooks/useLoading';

export const ProductsContext = createContext([]);

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState([{}]);

  const { alert } = useAlert();
  const { addRequest, removeRequest } = useLoading();

  useEffect(() => {
    addRequest();
    fetchData('products')
      .then((response) => {
        const products = response.slice(0, response.length - 1);
        const filters = response.slice(response.length - 1, response.length);

        setProducts(products);

        setFilters(filters);

        alert('Produtos carregados com sucesso!', true);
      })
      .catch((error) => {
        alert('Erro ao carregar os produtos!', false);

        removeRequest();
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProductsContext.Provider value={{ products, filters }}>
      {children}
    </ProductsContext.Provider>
  );
}
