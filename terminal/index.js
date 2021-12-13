/*
    Javascript Terminal
*/

    // global vars 
    var input = document.getElementById("input");
    var output = document.getElementById("output");

    // triggers the focus on the input 
    input.focus();

    /*
        Initialise le CMD 
    */
    function initCMD(){
        output.value="User : >";
    }

    initCMD();

    /*
        Write in cmd
    */
   function writeCMD(){
        var entree = input.value;
        output.value += " "+entree;
        output.value += "\nUser : >";
        input.value="";
   }
    