import { Menu } from '../Menu';
import { Mobile } from '../Mobile';
import { Breadcrumbs } from '../Breadcrumbs';

import riachueloIcon from '../../assets/icons/riachuelo.svg';
import searchIcon from '../../assets/icons/search.svg';

import { CategoriesProvider } from '../../contexts/CategoriesContext';

import { Alert } from '../Alert';
import { useAlert } from '../../hooks/useAlert';
import { useFilter } from '../../hooks/useFilter';
import './styles.scss';

export function Header() {
  const data = useFilter();
  const { message } = useAlert();

  return (
    <CategoriesProvider>
      <header className="header">
        {message && <Alert alertText={message} />}

        <div className="header__container">
          <Mobile />

          <div className="header__desktop">
            <h1 className="header__logo">
              <img className="header__img" src={riachueloIcon} alt="Logo" />
            </h1>
          </div>

          <div className="header__search">
            <img className="header__icon" src={searchIcon} alt="Search" />
            <input
              className="header__input"
              type="search"
              placeholder="O que você está procurando?"
              onChange={(event) =>
                setTimeout(() => data.setSeachProduct(event.target.value), 300)
              }
            />
          </div>

          <Menu />
        </div>
      </header>

      <Breadcrumbs />
    </CategoriesProvider>
  );
}
