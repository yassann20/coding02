var trigger = document.getElementById("SP-hum");
if(trigger){
    trigger.addEventListener("click",function(){
        var target1 = document.getElementById("span1");
        var target2 = document.getElementById("span2");
        var target3 = document.getElementById("span3");
        var navtarget = document.getElementById("SP-menu")
        target1.classList.toggle("active");
        target2.classList.toggle("active");
        target3.classList.toggle("active");
        navtarget.classList.toggle("fadein")
    })
}