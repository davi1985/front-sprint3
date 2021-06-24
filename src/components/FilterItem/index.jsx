import filterIcon from '../../assets/icons/filter.svg';

export function FilterItem({ label }) {
  return (
    <li className="filters__item">
      <span className="filters__label">{label}</span>
      <img className="filters__img" src={filterIcon} alt="" />
    </li>
  );
}
