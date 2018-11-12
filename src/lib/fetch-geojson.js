export function fetchGeoJson(url) {
  return fetch(url)
    .then(response => response.json())
}
