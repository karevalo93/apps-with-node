const request = require('request')
const geoCode = require('./utils/geocode')

// const url = 'http://api.weatherstack.com/current?access_key=b5f13d469d7625cd18acaf25e242bc1c&query=New%20York&units=f'

// request({ url: url, json: true }, (error, response) => {

//     if (error) {
//         console.log('Unable to connect to weather service!')
//     }
//     else if (response.body.error) {
//         console.log('Unable to find location!')
//     }
//     else {
//         console.log('It is currently ' + response.body.current.temperature + ' degrees out')
//         console.log('It feels like ' + response.body.current.feelslike + ' degrees out')
//     }

// })

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2FyZXZhbG8iLCJhIjoiY2toYXZva2tkMTBzNTJ4a2htdTYweXkybCJ9.gc6sofbnPkp_VQrqqTdjYg&limit=1'

// request({ url: geocodeURL, json: true }, (error, response) => {

//     if (error) {
//         console.log('Unable to connect to geolocation service!')
//     }
//     else if (response.body.features.length === 0) {
//         console.log('Unable to get ubication!')
//     }
//     else {
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude, longitude)
//     }
// })



geoCode('New York', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})