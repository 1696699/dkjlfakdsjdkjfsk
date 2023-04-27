var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


function add(){
    numberkey = "N1.png";
    numberKeySource = new Image();
    numberKeySource.src = numberkey;

    alphaKey = "A1.png";
    alphaKeySource = new Image();
    alphaKeySource.src = alphaKey;

    arrowKey = "A2.png"
    arrowKeySource = new Image();
    arrowKeySource.src = arrowKey;

    specialKey = "S1.png"
    specialKeySource = new Image();
    specialKeySource.src = specialKey;

    otherKey = "O1.png";
    otherKeySource = new Image();
    otherKeySource.src = otherKey;
}




window.addEventListener("keydown", keyPressed)
function keyPressed(e) {
    var key_Pressed = e.keyCode;
    console.log(key_Pressed)
    if(key_Pressed >= 48 && key_Pressed <= 57){
        numberShow();
    }
    if(key_Pressed >= 65 && key_Pressed <=  90 || key_Pressed >= 97 && key_Pressed <= 122) {
        alphaShow();
    }
    if(key_Pressed >= 37 && key_Pressed <= 40){
        arrowShow();
    }
    if(key_Pressed == 17 || key_Pressed == 18 || key_Pressed == 27) {
        specialShow();
    }
    if(key_Pressed == 13 || key_Pressed == 16 || key_Pressed == 46){
        otherShow();
    }
}

function otherShow(){
    ctx.drawImage(otherKeySource, 10, 10, 300, 300);
}

function specialShow() {
    ctx.drawImage(specialKeySource, 10, 10, 300, 300);
}

function arrowShow() {
    ctx.drawImage(arrowKeySource, 10, 10, 300, 300);
}

function alphaShow() {
    ctx.drawImage(alphaKeySource, 10, 10, 300, 300);
}

function numberShow(){
    ctx.drawImage(numberKeySource, 10, 10, 300, 300);
}