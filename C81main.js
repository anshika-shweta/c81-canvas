canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");
color="red"; 

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200, 300, 70, 1, 2*Math.PI);
ctx.stroke();

canvas.addEvetListner("mousedown",my_mousedown);

function my_mousedown(e)
{colour=document.getElementById("color").value;
console.log(color);

mouse_x=e.client-canvas.offsetLeft;
mouse_y=e.client-canvas.offsetTop;
console.log("X = " + mouse_x + " y=" mouse_y);
circle(mouse_x, mouse_y)



}




