export function fetchData(endpoint) {
  return fetch(`http://localhost:3333/${endpoint}`).then((response) =>
    response.json()
  );
}
