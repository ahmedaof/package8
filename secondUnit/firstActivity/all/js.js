
var audio = new Audio('./sound/الاقامة(التبويب الاول).wav');
var isPlaying = false;
document.getElementById('pla').addEventListener("click", function(){
	isPlaying ? audio.pause() : audio.play();
});

audio.onplaying = function() {
  isPlaying = true;
};
audio.onpause = function() {
  isPlaying = false;
};





