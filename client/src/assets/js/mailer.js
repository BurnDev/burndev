/* eslint-disable no-undef */
function contact(data, cb) {
    return fetch('api/contact', {
        accept: 'application/json',
        headers: {
            'Content-Type': "application/json"
        },
        method: 'POST',
        body: JSON.stringify(data)
    })
        .then(checkStatus)
}

function checkStatus(response) {
    const status = response.statusCode || response.status;
    if (status >= 200 && status < 300) {
        return response;
    }
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
}

export default contact
