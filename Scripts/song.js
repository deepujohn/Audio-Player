function update(asrc)
{
	var audio=document.getElementById('audio');
	var source=document.getElementById('mp3source');
	source.src="assets/VIP/"+asrc+".mp3";
	//alert(asrc);	
	audio.load();
}