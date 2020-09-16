const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=ccaff0550a8ee77174d4482ab6912fc2&units=f&query="+latitude+","+longitude

    request({url, json: true}, (error, { body }) => {
        if(error){
            callback("Unable to connect to Weatherstack service!", undefined)
        } else if(body.error) {
            console.log("Unable to find location!")
            callback("Unable to find location!", undefined)
        } else {
            const currentData = body.current
            callback(undefined, currentData.weather_descriptions[0]+". It is currently "+currentData.temperature+" degrees out. Although it feels like "+currentData.feelslike)
        }
    })
}

module.exports = forecast