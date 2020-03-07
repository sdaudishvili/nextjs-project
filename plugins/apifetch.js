require('es6-promise').polyfill();
require('isomorphic-fetch');

export default function apifetch(url, method, body) {
  let errored = false;
  return fetch(process.env.baseApiUrl + url, {
    method,
    cache: 'no-cache',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then((response) => {
      if (response.status >= 400) {
        errored = true;
      }
      return response.json();
    })
    .then((data) => {
      if (errored) {
        throw data;
      }
      return data;
    });
}
