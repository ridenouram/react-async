export default function getQuotes(count, character) {
  return fetch(`http://futuramaapi.herokuapp.com/api/characters/${character}/${10}`)
    .then(response => response.json())
    .then(quotes => quotes);
}
