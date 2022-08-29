canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var  MouseEvent = "empty";
var lastPositionX, lastPositionY;

color = "black";
widthLine = 1

canvas.addEventListener("mousedown", myMouseDown);

function myMouseDown(e)
{
    //atividade adicional
    color = document.getElementById("color").value;
    widthLine = document.getElementById("widthLine").value;

    //fim adividade adicional

    mouseEvent = mymousedown 
}

canvas.addEventListener("mouseUp", myMouseUp);

function myMouseUp(e)
{
    mouseEvent = myMouseUp;
}

canvas.addEventListener("mouseLeave", myMouseLeave);

function myMouseLeave(e)
{
    mouseEvent = myMouseLeave;

}

canvas.addEventListener("mousemove", myMouseMove);

function myMouseMove(e)
{
    PositionMouseX = e.clientX - canvas.offsetLeft;
    PositionMouseY = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthLine;

        console.log(" last position of x and y coordinates ");
        console.log("X = " + lastPositionX + "Y = "+ lastPositionY);
        ctx.moveTo(lastPositionX, lastPositionY);

        console.log("current position of x and y coordinates = ");
        console.log("X = " + PositionMouseX + "Y = "+ PositionMouseY);
        ctx.lineTo(PositionMouseX, PositionMouseY);
        ctx.Stroke();
    }

    lastPositionX = PositionMouseX;
    lastPositionY = PositionMouseY;

}

  

