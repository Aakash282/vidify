require([
	'$api/models'
], function(models) {
	'use strict';

  	var youtubeQuery = function() {
  		// We generate the youtube query by getting the track name and album name. 
    	var videoQuery = models.player.track.name;
    		videoQuery += " ";
    		videoQuery += models.player.track.album.name;

    	document.getElementById('videoQuery').value = videoQuery;
  	};

	exports.youtubeQuery = youtubeQuery;  
});
