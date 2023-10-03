var myName = document.getElementById("myName");

setInterval(function(){
    if(myName.style.color === "black"){myName.style.color = "white"} else{myName.style.color = "black"}
}, 1000);
