// Your API key is d4373215267d7efd5eb47347b40ebe81

var prompt = require('prompt');
var request = require('request');

function SynonymAPI (apiKey) {
  this.apiKey = apiKey;
  this.getSynonyms = synonymsGetter;
}

module.exports = {
    SynonymAPI: SynonymAPI
};

function synonymsGetter() {
    prompt.get("Word", function(err, word) {
        if (err) {
            console.log(err);
        }
        else {
            var bhtCall ='http://words.bighugelabs.com/api/2/d4373215267d7efd5eb47347b40ebe81/' + word.Word + '/json';
            // console.log(bhtCall); // for debugging
        
            request(bhtCall, function(err, wordResponse) {
                if (err) {
                    console.log(err);
                }
                else {
                    var jsonWordResponse = wordResponse.body;
                    //console.log(jsonWordResponse); //for debugging
                    var jsonWordObj = JSON.parse(jsonWordResponse);
                    console.log(jsonWordObj);
                }
            });
        }
    });
}

synonymsGetter();

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