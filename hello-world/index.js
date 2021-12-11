/*
    Javascript Hello World 
*/

    /*
        Triggered when a dude click somewhere on the page
    */  
    function onClickBtn(){
        var cX = event.clientX;
        var cY = event.clientY;

        var element = document.createElement("span");   
        element.innerHTML = "Hello World !";                  

        element.setAttribute("style", "position:absolute;margin:0px;top:"+cY+"px;left:"+cX+"px;"); // placement sur la page

        document.body.appendChild(element);  // ajout de l'élément

        
        
    }