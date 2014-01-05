require([
   '$api/models',
   '$api/search#Search',
   '$views/image#Image'
], function(models,s, Image) {
     'use strict';

     models.player.load('track').done(function(prop) {
           var curTrack = document.createElement('cur');
           curTrack.value = prop.track.name;
           curTrack.value += ' ' + prop.track.album.name;
           console.log(document.getElementById('cur'));
      });
});