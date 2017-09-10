
var canvas
var ctx
document.getElementById("calculate").addEventListener("click", calculateVolume)
function calculateVolume()
{
   var radius = parseFloat(document.getElementById("radius").value)
   var type = typeof radius
   if(type === "number" )
   {
       if(radius<150)
       {
        var volume = (4*Math.PI*(radius*radius*radius))/3
        document.getElementById("volume").value=volume
        canvas = document.getElementById("myCanvas");
        ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(150,150,radius,0,2*Math.PI);
        ctx.stroke();
        
       }
       else
       {
           alert("the radius is to big for canvas")
       } 
   }
   else
   {
       alert("please make sure you place a curect radius")
   }
   
}

function clearCanvas()
        {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }


document.getElementById("div1").addEventListener("load", setTimeout(function()
   {canvas = document.getElementById("myCanvas");
        var radius=1
        while(radius<150)
        {
            ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.arc(150,150,radius,0,2*Math.PI);
            ctx.stroke(); 
            radius++
       }    
    }, 3000))


 setTimeout(function()
   {canvas = document.getElementById("myCanvas");
        var radius=1
        while(radius<150)
        {
            ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.arc(150,150,radius,0,2*Math.PI);
            ctx.stroke(); 
            radius++
       }    
    }, 100)

