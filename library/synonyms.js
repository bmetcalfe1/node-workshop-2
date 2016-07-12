// Your API key is d4373215267d7efd5eb47347b40ebe81

var request = require('request');


var synonymsGetter = function(word, callback) {
    
    var bhtCall ='http://words.bighugelabs.com/api/2/d4373215267d7efd5eb47347b40ebe81/' + word + '/json';
    
    request(bhtCall, function(err, wordResponse) {
        if (err) {
            console.log('there was an error');
        }
        else {
            var jsonWordResponse = wordResponse.body;
            //console.log(jsonWordResponse); //for debugging
            var jsonWordObj = JSON.parse(jsonWordResponse);
            console.log(jsonWordObj);
        }
    synonymsGetter();
    });
};
    
function SynonymAPI (apiKey) {
  this.apiKey = apiKey;
  this.getSynonyms = synonymsGetter;
}

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

module.exports = {
    SynonymAPI: SynonymAPI
};