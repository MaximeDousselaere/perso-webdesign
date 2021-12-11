/*
    Javascript Hello World 
*/

    /*
        Global vals
    */
        var fonts = [
            "Georgia, serif",
            '"Gill Sans", sans-serif',
            "sans-serif",
            "serif",
            "cursive",
            "system-ui",
            "impact",
            "Times new Roman"
        ];


    /*
        Triggered when a dude click somewhere on the page
    */  
    function onClickBtn(){
        var cX = event.clientX;
        var cY = event.clientY;
    
        var element = document.createElement("span");   
        element.innerHTML = "Hello World !";                  
        
       

        element.setAttribute("style", "position:absolute;text-decoration:none;margin:0px;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none;top:"
                                +cY+"px;left:"+cX+"px;font-family:"+fonts[getRandom(fonts.length)]+
                                ";font-size:"+getRandom(50)+"px;color:"+getRandomColor()+""); // style of the element
        document.body.appendChild(element);  // add element on page
    }

    /*
        Return random value from 1 to max
    */
    function getRandom( max ){
        return Math.floor(Math.random() * max);
    }

    /*
        Return random hexadecimal code
    */
    function getRandomColor(){
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        return '#' + n.slice(0, 6);
    }