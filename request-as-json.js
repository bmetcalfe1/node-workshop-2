var request = require('request');
var prompt = require('prompt');

function getLocationData() {
    prompt.get("City", function (err, result){
        // console.log(result);
        var myAddressUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + result.City;
        //console.log(myAddressUrl); //for debugging
        
        request(myAddressUrl, function(err, addyResponse) {
            if (err) {
                console.log('there was an error');
            }
            else {
                var jsonAddressResponse = addyResponse.body;
                //console.log(jsonAddressResponse); //for debugging
                var addyJsonObj = JSON.parse(jsonAddressResponse);
                var latAddress = Number(addyJsonObj.results[0].geometry.location.lat.toFixed(2)); // might not want to sherten... we'll see
                var lonAddress = Number(addyJsonObj.results[0].geometry.location.lng.toFixed(2));
  
                    function weatherData() {
                    var forecastCall ='https://api.forecast.io/forecast/9f463e457090e33a31024755a41fb3f8/' + latAddress + "," + lonAddress;
                        request(forecastCall, function(err, myResponse) {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                var jsonWeatherResponse = myResponse.body;
                                //console.log(jsonAddressResponse); //for debugging
                                var weatherJsonObj = JSON.parse(jsonWeatherResponse);

                                console.log(weatherJsonObj.daily.data[0]);
                                console.log(weatherJsonObj.daily.data[1]);
                                console.log(weatherJsonObj.daily.data[2]);
                                console.log(weatherJsonObj.daily.data[3]);
                                console.log(weatherJsonObj.daily.data[4]);
                            }
                        });
                    }
                    weatherData();
            }
        });
    });
}

getLocationData();