require([
  '$api/models',
  'scripts/language-example',
  'scripts/cover-example',
  'scripts/button-example',
  'scripts/playlist-example'//,
  //'scripts/auth',
  //'scripts/query', 
  //'scripts/search' 
], function(models, languageExample, coverExample, buttonExample, playlistExample, search) {
  'use strict';
  languageExample.doHelloWorld();
  coverExample.doCoverForAlbum();
  buttonExample.doShareButtonForArtist();
  buttonExample.doPlayButtonForAlbum();
  playlistExample.doPlaylistForAlbum();


  //model.player.pause();

  //search.search();

  //var URL = "http://www.youtube.com/watch?v=";
  //    URL += document.getElementById('video_id');
  //window.open(URL);
});
