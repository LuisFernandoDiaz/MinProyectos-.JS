
var c=0;
function cambio(){
    c++;
    if(c>12)  c=1;
    document.getElementById("imgcar").setAttribute("src","img/"+c+".jpg");
    setTimeout("cambio()",1000);
}
document.body.setAttribute("onload","cambio()");

parpadear();
function parpadear(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    document.getElementById("h1car").style.color="rgb("+r+","+g+","+ b+")";
    setTimeout("parpadear()",1000);
}

