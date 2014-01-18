javascript:(function() { 

var adminDiv=document.createElement('div'); 
adminDiv.innerHTML = "<div style='position: fixed; width: 100%; height: 50px; background: white; border-bottom: 1px solid grey;top: 0px;z-index: 500;'><div id='capturedText'></div></div>";
document.body.appendChild(adminDiv);

document.onclick = function(e, adminDiv){
    var x = e.clientX;
    var y = e.clientY;
    
    elementMouseIsOver = document.elementFromPoint(x, y); 
    if(elementMouseIsOver.style.background != "yellow"){
        elementMouseIsOver.style.background = "yellow";
        elementMouseIsOver.style.border = "3px solid grey";
        document.getElementById("capturedText").innerText = elementMouseIsOver.innerText;
        
        
 
         // check order
         // id
         // className
         // nodeName
    }
    else{
        elementMouseIsOver.style.background = "white";
        elementMouseIsOver.style.border = "3px solid grey";
    }
    
    event.preventDefault();
 }
 
})();

