/* Mide toda la pantalla */
var mideX = function () { X=this.innerWidth; return X;};
var mideY = function () { Y=this.innerHeight;return Y;};
var estilo,capa,contenido;

function crearDiv() {
    estilo = "width:" + mideX() + "px;height:" + mideY() + "px;background-color:rgba(10, 10, 10, 0.5);position:absolute;top:0px;left:0px;float:left;z-index:10;text-align:center;vertical-align:middle";
    capa = document.createElement('div');
    capa.setAttribute('id', 'fullScreen');
    capa.setAttribute('onclick','borraDiv();')
    capa.setAttribute('style', estilo);
}
function crearContenido(tag,source) {
    crearDiv();
    var alto = ((mideY() * 85) / 100) + "px";
    switch (tag){
        case "img":
            contenido = document.createElement('img');
            contenido.setAttribute('id', 'overElement');
            contenido.setAttribute('src', source);
            contenido.setAttribute('width', 'auto');
            contenido.setAttribute('height', alto);
            capa.appendChild(contenido);
            document.body.appendChild(capa); 
        case "video":
            contenido = document.createElement('video');
            contenido.setAttribute('id', 'overElement');
            contenido.setAttribute('width', ancho);
            contenido.setAttribute('height', 'auto');
            contenido.setAttribute('autoplay');
            contenido2 = document.createElement('source');
            contenido2.setAttribute('src', source);
            contenido2.setAttribute('type', 'video/mp4');
            contenido.appendChild(contenido2);
            capa.appendChild(contenido);
            document.body.appendChild(capa);
        default:
            "¡¡ ERROR CARGANDO EL ARCHIVO !! Siento las molestias";
    } 
}
function borraDiv() {
    var child = document.getElementById('overElement');
    child.parentNode.removeChild(child);
    child = document.getElementById('fullScreen');
    child.parentNode.removeChild(child);
}