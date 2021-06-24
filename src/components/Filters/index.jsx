import { useProducts } from '../../hooks/useProducts';

import { FilterItem } from '../FilterItem';

import './styles.scss';

export function Filters() {
  const { filters } = useProducts();

  const data = filters[0].filters;
  return (
    <section className="main__filters filters">
      <ul className="filters__list">
        {data &&
          data.map((filter) => (
            <FilterItem key={filter.id} label={filter.label} />
          ))}
      </ul>
    </section>
  );
}
