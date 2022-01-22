//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const request = require('request')

const forecast = (latitude, longtitude, callback) => {
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + '&lon='+ longtitude +"&appid=5f96cadd75e5c930a8330edef7cefca5"
    //console.log(url)
    request({url, json: true}, (error, {body}) =>{
        if (error){
            callback("Unable connect")
        }else if(body.cod == 400 || body.cod == 401){
            callback("somthing error")
        }else{
        const cur_temp = body.main.temp
        const feel_temp = body.main.feels_like
        callback(undefined,`It is currently "${cur_temp}" degrees out and feel like "${feel_temp}" degree`)
    }
    })

}
module.exports = forecast