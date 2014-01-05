// TRYING TO RUN EXAMPLE CODE WITHIN SPOTIFY - SCROLL TO BOTTOM  

  // // Called automatically when JavaScript client library is loaded.
  // function onClientLoad() {
  //   gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
  // }

  // // Called automatically when YouTube API interface is loaded (see line 9).
  // function onYouTubeApiLoad() {
  //   // This API key is intended for use only in this lesson.
  //   // See http://goo.gl/PdPA1 to get a key for your own applications.
  //   gapi.client.setApiKey('AIzaSyDw4IoMovLs58sf3ovy8WWdeJEA1HSyVT4');
  // }

  // // Search for a specified string.
  // function search() {
  // var q = document.getElementById('videoQuery');
  // var request = gapi.client.youtube.search.list({
  //   q: q,
  //   part: 'snippet'
  //   type: 'video'
  // });

  // // run the search function and save the video id DOM
  // request.execute(function(response) {
  //   var result_id = (response.items[0]).id;

  //   // result_id now holds the video id that we need to play. 
  //   document.getElementById('video_id').value = result_id;
  // });
  // };

//  After the API loads, call a function to enable the search box.
  
  
// function handleAPILoaded() {
//   $('#search-button').attr('disabled', false);
// }

// // Search for a specified string.
// function search() {
//   var q = $('#query').val();
//   var request = gapi.client.youtube.search.list({
//     q: q,
//     part: 'snippet'
//   });

//   request.execute(function(response) {
//     var str = JSON.stringify(response.result);
//     $('#search-container').html('<pre>' + str + '</pre>');
//   });
// }
// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var YT = 'undefined';

// Helper function to display JavaScript value on HTML page.
function showResponse(response) {
    YT = response;
    // changed: namegiving
    document.getElementById('VideoURL').value = YT.items[0].id.videoId;
}


// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.setApiKey('AIzaSyB0mteDV5vDKFR-iAv4Fx4OC2gp1Yhqe9U');
    gapi.client.load('youtube', 'v3', function() { console.log('loaded.'); });
    // search();    // changed.
}



function search() {
    gapi.client.setApiKey('AIzaSyB0mteDV5vDKFR-iAv4Fx4OC2gp1Yhqe9U');
    gapi.client.load('youtube', 'v3', function() { console.log('loaded.'); });
    // Use the JavaScript client library to create a search.list() API call.
    var qVar = "Kanye West Amazing"
    // changed. added: type
    var request = gapi.client.youtube.search.list({
        type: 'video',
        part: 'id',
        q: qVar
    });

    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
    request.execute(onSearchResponse);
}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
    showResponse(response);
}