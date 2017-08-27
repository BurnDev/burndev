/* eslint-disable no-undef */
function contact(data) {
  return fetch('api/contact', {
    accept: 'application/json',
    headers: {
      'Content-Type': "application/json"
    },
    method: 'POST',
    body: JSON.stringify(data)
  })
    .then(checkStatus)
    .then(parseJSON)
    //.then(cb);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
}

function parseJSON(response) {
  return response.json();
}

export default contact
