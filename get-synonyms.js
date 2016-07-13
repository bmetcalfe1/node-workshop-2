var prompt = require('prompt'); 

var SynonymConstructor = require('./library/synonyms');

var apiKey = 'd4373215267d7efd5eb47347b40ebe81';

prompt.get('word',function(err, res){
    if (err) {
        console.log(err);
    }
    else {
        var word = res.word;
        var synonymGrab = new SynonymConstructor(apiKey);
        synonymGrab.getSynonyms(word, function(err, res){
            if (err) {
                console.log(err);
            }
            else {
                console.log(res);  
            }
        });
    }
});

