var request = require('request');

function requestJson(url, callback) {
    var myUrl = url;
    request(myUrl, function(err, myResponse) {
        var jsonResponse = myResponse.body;
        //console.log(jsonResponse); // for debugging 
        var jsonResponseObj = JSON.parse(jsonResponse);
        if (err) {
            callback(err);
        }
        else {
            try {
                callback(err, jsonResponseObj);
            }
            catch (err) {
                callback(err);
            }
        }
    });
}
requestJson('https://maps.googleapis.com/maps/api/geocode/json?address=toronto', function(err, myResponse) {
     if (err) {
        console.log(err);
    }
    else {
        console.log(myResponse);
    }
});

module.exports = {
    requestJson: requestJson,
};