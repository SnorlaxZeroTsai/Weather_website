const request = require('request')

const forecast = (latitude, longtitude, callback) => {
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + '&lon='+ longtitude +"&appid={my_token}"
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
