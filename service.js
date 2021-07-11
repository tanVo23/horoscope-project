const URL = 'https://aztro.sameerkumar.website'

function getHoroscope() {
    return fetch(URL,{
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(res => res.json())
}

function postHoroscope(body){
    return fetch(URL, {
        method: 'POST',
        headers: {
            'Accept' : 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(res => res.json())
}
