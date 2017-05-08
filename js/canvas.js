	var imgs = new Array();
	var urls = new Array();
	var DOMCanvas;
	var contexto2D;
function canvas(imagen)
{
	var mx = mideX();
	var my = mideY();
	DOMCanvas = document.getElementById("canvas-fondo");
	contexto2D = DOMCanvas.getContext("2d");
	DOMCanvas.style.width = mx+"px";
	DOMCanvas.style.height = my+"px";
	urls = ["img/canvas-1.jpg","img/canvas-2.jpg","img/canvas-3.jpg"];
	for(var x=0;x<3;x++)
	{
		img = new Image(mx,my);
		img.src = urls[x];
		img.width = mx+"px";
		img.height = my+"px";
		imgs.push(img);
	}
	contexto2D.drawImage(imgs[imagen],0,0,mx,my);
}

