const bilder=document.querySelectorAll("#bilder>img");
const kreuz=document.querySelector("#lightbox i")


bilder.forEach(test)


function test(e)
{
    e.onclick=function () 
    { 
        document.getElementById("lightbox").style.display="flex"

        const quelle=e.getAttribute("src");
        const ligthImg=document.querySelector("#lightbox img");


        ligthImg.setAttribute("src", quelle);



    
    
    }
}

kreuz.onclick=function()
{
    document.getElementById("lightbox").style.display="none"
}



   