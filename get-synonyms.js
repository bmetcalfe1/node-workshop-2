var request = require('request');
var prompt = require('prompt');

var syn = require('./library/synonyms');
var instance = new syn.SynonymAPI();
console.log('instance', instance.getSynonyms);



    prompt.get("Word", function(err, word) {ahka
         syn.SynonymAPI.getSynonyms(word);
    });