const bilder=document.querySelectorAll("#bilder>img");


bilder.forEach(test)


function test(e)
{
    e.onclick=function () { document.getElementById("lightbox").style.display="flex"}
}





   