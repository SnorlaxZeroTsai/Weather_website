const request = require('request')
const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?types=address&access_token=pk.eyJ1IjoiemVybzAzMDgiLCJhIjoiY2t5b2RiYTMxMzVtaDMzcWhzeWFzbmx4cyJ9.Dd47upIM3njHDAWLIVDVbQ"
    request({url, json: true},(error, {body}) =>{
        if (error){
            callback("Unable connect")
        }else if(body.features.length === 0){
            callback("Unable to connect to location")
        }else{
            callback(undefined, {
                latitude : body.features[0].center[0],
                longitude : body.features[0].center[1],
                location : body.features[0].place_name
            })
            
        }
    })

}

module.exports = geocode