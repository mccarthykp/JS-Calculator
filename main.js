var firstpart = 0
var secondpart = 0
var op = 0
var dot = 0

function numbers(value){

    // wherever this functon is called, get the value of what is on the screen
    var screen=document.getElementById("screen");

    // check if = has been pressed. variable value is where anything pressed is stored. it is passed through the function number()
    if(value=="=")
    {
        // split input using split function, which returns it as an array 
        var all=screen.value.split(" ")
        firstpart=parseFloat(all[0]);
        op=all[1];
        secondpart=parseFloat(all[2]);
        
        var screen=document.getElementById("screen");

        if (secondpart==0) 
        {
            screen.value="division by zero!"
        }

        switch(op)
        {   

            case '+':
                result = firstpart + secondpart;
                screen.value= result;
                break;
            case '-':
                result = firstpart - secondpart;
                screen.value= result;
                break;
            case '*':
                result = firstpart*secondpart;
                screen.value= result;
                break;
            case '/':
                result = firstpart / secondpart;
                screen.value= result;

                break;
            case '%':
                result = firstpart % secondpart;
                screen.value= result;
                break;
            default:

            break;
        }
    }

    // if the equals sign wasn't pressed, the following will be evaluated.
    // checks what is on screen and what is pressed
    else if(screen.value =="0" && value=="0")
    {
        return null;
    }

    // checks what is on the screen and what is pressed
    else if(screen.value=="0" && !((value=="*" || value=="/" )|| ((value =="+"|| value=="-")|| (value=="%"))))
    {
        screen.value=value;
        secondpart+=value;
    }
    // if a number was pressed, it will save it on already decleared variable and on screen
    else if(!((value=="*" || value=="/" )||((value =="+"|| value=="-")|| (value=="%"))))
    {
        screen.value+=value;
        secondpart+=screen.value;
    }

    // when an operation is pressed, it will build the string wuth spaces to help split the array
    else if (op=="0" && ((value=="*" || value=="/" )|| ((value =="+"|| value=="-")|| (value=="%"))))
    {
    
    // building the string
    screen.value+=" ";
    screen.value+=value;
    screen.value+=" ";
    op=value;
    }
    
    else
    {
        return;
    }
}

function deleted(ac){
    var screen=document.getElementById("screen");
    screen.value='';
    op=0;
    del=0;
    var firstpart = "0";
    var secondpart = "0";
    var dot=0;
}
        
function dots(dt){
    if (dot== 0){
    var screen=document.getElementById("screen");
    screen.value+=dt;

    // changes the value of dot to avoid pressing it two times 
    dot="recoded"
    }
    else
    {
    // returns empty if you pressed dot for first time
    return;
    }
}

var all=screen.value.split(" ");
firstpart=parseFloat(all[0]);
op=all[1];
secondpart=parseFloat(all[2]); 
