export function BreadcrumbItem({ label, link, active }) {
  return (
    <li
      className={
        active
          ? 'breadcrumbs__item breadcrumbs__item--active'
          : 'breadcrumbs__item'
      }
    >
      <a className="breadcrumbs__link" href={link}>
        {label}
      </a>
    </li>
  );
}
