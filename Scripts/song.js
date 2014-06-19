function update(asrc)
{
	var audio=document.getElementById('audio');
	var source=document.getElementById('mp3source');
	source.src=asrc;
	//alert(asrc);	
	audio.load();
}