console.log("Welcome to the stars")

var axios = require("axios").default;

var options = {
 method: 'GET',
 url: 'https://astrology4.p.rapidapi.com/auspicious-period',
 params: {coordinates: '<REQUIRED>', datetime: '<REQUIRED>', ayanamsa: '<REQUIRED>'},
 headers: {authorization: 'undefined', 'x-rapidapi-host': 'astrology4.p.rapidapi.com'}
};

axios.request(options).then(function (response) {
console.log(response.data);
}).catch(function (error) {
console.error(error);
});
