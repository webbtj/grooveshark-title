//when updating this script, please remember to minify and url encode
//this script and add it to the anchor in the index.html document
(function doShark(){
	var song_info = document.getElementById('playerDetails_current_song');
	var title_elm = document.getElementsByTagName('title')[0];
	if(typeof song_info != 'undefined' && typeof title_elm != 'undefined'){
		getSongTitle = function(){
			song_info = document.getElementById('playerDetails_current_song');
			children = song_info.getElementsByTagName('a');
			song = children[0].getAttribute("title");
			artist = children[1].getAttribute("title");
			album = children[2].getAttribute("title");
			title_string = song + " - " + artist + " - " + album;
			title_elm.innerHTML = title_string;
			setTimeout('getSongTitle()', 5000);
		};
		getSongTitle();
	}
})();
scr = document.getElementById('shark-bookmarklet-script');
scr.parentNode.removeChild(scr);