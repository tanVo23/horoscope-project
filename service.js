const URL = 'https://astrology4.p.rapidapi.com/auspicious-period'

function getHoroscope() {
    return fetch(URL,{
        headers: {
            'Accepts': 'application/json'
        }
    })
    .then(res => res.json())
}

