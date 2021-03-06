/*
    Getting info from : https://developer.mozilla.org/fr/docs/Web/CSS/cursor
*/

    var listCursors = [ "auto", 
                        "default",
                        "none",
                        "context-menu",
                        "help", 
                        "pointer",
                        "progress", 
                        "wait", 
                        "cell", 
                        "crosshair", 
                        "text", 
                        "vertical-text",
                        "alias",   
                        "copy",
                        "move",
                        "no-drop",
                        "grab",
                        "grabbing",
                        "not-allowed",
                        "all-scroll",
                        "col-resize",
                        "row-resize",
                        "n-resize",
                        "e-resize", 
                        "s-resize",
                        "w-resize", 
                        "ne-resize",
                        "nw-resize",
                        "se-resize",
                        "sw-resize",
                        "ew-resize",
                        "ns-resize",
                        "nesw-resize",
                        "nwse-resize",
                        "zoom-in",
                        "zoom-out"
                    ]
    var bodi = document.getElementById("b");

    main();

    function main(){
        interval = setInterval(function(){
            changeCursor();  
        }, 100);
    }

    function changeCursor(){
        bodi.setAttribute("style", "cursor:"+listCursors[Math.floor(Math.random() * listCursors.length)])
    }