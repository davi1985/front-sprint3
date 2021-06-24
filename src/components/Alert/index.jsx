import './styles.scss';

export function Alert({ alertText, type }) {
  return alertText ? (
    <p className={type ? 'success' : 'error'}>{alertText}</p>
  ) : (
    ''
  );
}
