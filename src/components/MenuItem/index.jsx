export function MenuItem({ label, link }) {
  return (
    <li className="menu__item">
      <a className="menu__link" href={link}>
        <span>{label}</span>
      </a>
    </li>
  );
}
