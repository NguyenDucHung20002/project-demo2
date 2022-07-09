
var nav = document.querySelector("nav")
document.addEventListener("click",function(e){
    var target = e.target
    var btn_bars = target.closest(".bars")
    if(btn_bars){
        nav.classList.add("active")
    }else if(!btn_bars){
        nav.classList.remove("active")
    }
})