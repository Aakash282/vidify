// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    // This API key is intended for use only in this lesson.
    // See http://goo.gl/PdPA1 to get a key for your own applications.
    gapi.client.setApiKey('AIzaSyDw4IoMovLs58sf3ovy8WWdeJEA1HSyVT4');
}

// Search for a specified string.
function search() {
  var q = document.getElementById('videoQuery');
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
    type: 'video'
  });

  // run the search function and save the video id DOM
  request.execute(function(response) {
    var result_id = (response.items[0]).id;

    // result_id now holds the video id that we need to play. 
    document.getElementById('video_id').value = result_id;
  });
}