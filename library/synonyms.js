// Your API key is d4373215267d7efd5eb47347b40ebe81

var request = require('request');

function SynonymAPI(apiKey) {
    this.apiKey = apiKey;
}

SynonymAPI.prototype = {
    getSynonyms: function(word, callback) {
        var bhtCall = 'http://words.bighugelabs.com/api/2/' + this.apiKey + '/' + word + '/json';
        request(bhtCall, function(err, wordResponse) {
            if (err) {
                callback(err);
            }
            else {
                try {
                    var jsonWordResponse = wordResponse.body;
                    var jsonWordObj = JSON.parse(jsonWordResponse);
                    callback(null, jsonWordObj);
                }
                catch (err) {
                    callback(err);
                }
            }
        });
    }
};

module.exports = SynonymAPI;

// Attempt One
// SynonymAPI.prototype = {
//     getSynonyms: function(word, callback) {

//         var bhtCall ='http://words.bighugelabs.com/api/2/d4373215267d7efd5eb47347b40ebe81/' + word + '/json';

//         request(bhtCall, function(err, wordResponse) {
//             if (err) {
//                 console.log('there was an error');
//             }
//             else {
//                 var jsonWordResponse = wordResponse.body;
//                 //console.log(jsonWordResponse); //for debugging
//                 var jsonWordObj = JSON.parse(jsonWordResponse);
//                 console.log(jsonWordObj);
//             }
//         getSynonyms();
//         });
//     }
// };


// Attempt Two
// var synonymsGetter = function(word, callback) {

//     var bhtCall ='http://words.bighugelabs.com/api/2/d4373215267d7efd5eb47347b40ebe81/' + word + '/json';

//     request(bhtCall, function(err, wordResponse) {
//         if (err) {
//             console.log('there was an error');
//         }
//         else {
//             var jsonWordResponse = wordResponse.body;
//             //console.log(jsonWordResponse); //for debugging
//             var jsonWordObj = JSON.parse(jsonWordResponse);
//             return jsonWordObj;
//         }
//     synonymsGetter();
//     });
// };