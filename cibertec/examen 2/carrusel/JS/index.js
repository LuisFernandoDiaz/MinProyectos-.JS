var c=0;
function cambio(){
    c++;
    if(c>4)  c=1;
    document.querySelector("img1").setAttribute("src","img/"+c+".jpg");
    setTimeout("cambio()",3000);
}
document.body.setAttribute("onload","cambio()");
