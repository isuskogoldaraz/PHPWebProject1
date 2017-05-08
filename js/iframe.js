function iframe(){
    var mx = mideX();
	var my = mideY();
    var iframe = document.getElementById("iframe");
    iframe.width = mx;
    iframe.height = my;
}
function iframeNuevo(page){
    document.getElementById("pageCSS").href = "css/"+page+".css";
    document.getElementById("iframe").lo
}