import { useCategories } from '../../hooks/useCategories';
import { BreadcrumbItem } from '../BreadcrumbItem';

import './styles.scss';

export function Breadcrumbs() {
  const { breadcrumbs } = useCategories();
  const data = breadcrumbs[0].current;

  return (
    <section className="main__breadcrumbs breadcrumbs">
      <nav>
        <ol className="breadcrumbs__list">
          {data &&
            data.map((item, index) => (
              <BreadcrumbItem
                key={index}
                label={item.label}
                link={item.link}
                active={data.length - 1 === index ? true : false}
              />
            ))}
        </ol>
      </nav>
    </section>
  );
}
