export default function getQuotes(count) {
  return fetch(`http://futuramaapi.herokuapp.com/api/quotes/${count}`)
    .then(response => response.json())
    .then(quotes => quotes);
}
