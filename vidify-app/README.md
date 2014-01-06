# Vidify

This is a Spotify App the opens the youtube music video of the currently playing song. It uses the most recent version of the Spotify Apps API.

## Installation

 1. Move the vidify-app folder to the Spotify folder created in step 2. 
 1 Create the Spotify folder if it doesn't exist already: `~/Spotify` (Mac OS X and Linux) or `My Documents\Spotify` (Windows).
 2. Open the Spotify folder.
 4. Move the vidify-app folder to the Spotify folder created in step 1.
  `git clone git://github.com/Aakash282/vidify.git vidify`.
 5. Download the [latest version of Spotify](http://spotify.com/download).
 6. Open Spotify and type "spotify:app:vidify" in the search bar (restart Spotify completely in case it doesn't find the App at first).
 7. Install XAMPP and move the index.html file that is currently in `vidify/app/youtube-portal` to `XAMPP/htdocs` (you might have to replace the file there). 
 8. Start your local server and enjoy. 

## Usage
Currently the video will open a window in your default web browser. Unfortunately, Spotify does not yet support flash OR html5 video so it is not possible to embed a youtube player (using the youtube-player api). I hope that Spotify add this functionality so I can make the appropriate changes. 

## More information

 * [Spotify API Reference](https://developer.spotify.com/technologies/apps/docs/)
 * [Youtube Data API v3](https://developers.google.com/youtube/v3/) 

Your feedback is welcome! Please feel free to create issues and send pull requests.
