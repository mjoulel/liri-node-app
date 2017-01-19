// Marie Laborde
// 1/15/2017

var fs = require('fs');             // Load the fs package to read and write
var request = require('request');
var cmds = process.argv[2];
var spotify = require("./keys.js");

  // Then run a request to the OMDB API with the movie specified
  request("http://www.omdbapi.com/?t=hidden+figures&y=2016&plot=short&r=json", function(error, response, body) {

  	// If the request is successful (i.e. if the response status code is 200)
  	if (!error && response.statusCode === 200) {

    	// Parse the body of the site and recover just the imdbRating
    	// (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    	console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
  	}
  });

  switch(cmds){
  	case 'my-tweets':
  		my-tweets();
  		break;
  	case 'spotify-this-song':
  		spotify-this-song();
  		break;
  	case 'movie-this':
  		movie-this();
  		break;
  	case 'do-what-it-says':
  		do-what-it-says();
  		break;
  }

  function spotify-this-song(){
    // We will read the existing random file
    fs.readFile("random.txt", "utf8", function(err, data){
      var keys = data.split(',');   //Breaks the string & separates into commas
      keys.map.data.split(',');
    });
    // We will add the value to the random file.
    fs.appendFile("random.txt", ", " + keys);
    return keys.length;
  });

  function movie-this(){
    // We will read the existing random file
    fs.readFile("random.txt", "utf8", function(err, data){
      var keys = data.split(',');   //Breaks the string & separates into commas
      keys.map.data.split(',');
    });
    // We will add the value to the random file.
    fs.appendFile("random.txt", ", " + keys);
    return keys.length;
  });

  function do-what-it-says(){
    // We will read the existing random file
    fs.readFile("random.txt", "utf8", function(err, data){
      var keys = data.split(',');   //Breaks the string & separates into commas
      keys.map.data.split(',');
    });
    // We will add the value to the random file.
    fs.appendFile("random.txt", ", " + keys);
    return keys.length;

    //Loops thru output array
    for (var i=0; i < keys.length; i++){
      console.log(keys[i]);   //Prints each array element
    }
  });