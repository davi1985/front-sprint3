import { useCategories } from '../../hooks/useCategories';
import { MenuItem } from '../MenuItem';

import './styles.scss';

export function Menu() {
  const { menuItems } = useCategories();

  return (
    <nav className="header__menu menu">
      <ul className="menu__list">
        {menuItems.map((item, index) => (
          <MenuItem label={item.label} link={item.link} key={index} />
        ))}
      </ul>
    </nav>
  );
}
