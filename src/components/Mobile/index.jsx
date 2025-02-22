import menuIcon from '../../assets/icons/menu.svg';
import closeIcon from '../../assets/icons/close.svg';
import rchloIcon from '../../assets/icons/rchlo.svg';
import { useState } from 'react';

export function Mobile() {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

  return (
    <div className="header__mobile">
      {mobileMenuOpened === false && (
        <div
          className="header__drawer menu header__drawer--active"
          onClick={() => setMobileMenuOpened(true)}
        >
          <img className="menu__img" src={menuIcon} alt="icon" />
          <p className="menu__title">menu</p>
        </div>
      )}

      {mobileMenuOpened === true && (
        <div
          className="header__drawer close header__drawer--active"
          onClick={() => setMobileMenuOpened(false)}
        >
          <img src={closeIcon} alt="close" />
          <p className="close__title">fechar</p>
        </div>
      )}

      <h1 className="header__logo">
        <img className="header__img" src={rchloIcon} alt="Logo" />
      </h1>
    </div>
  );
}
