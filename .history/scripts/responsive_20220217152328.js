document.addEventListener("click",function(e){
    var nav = e.target.closest("nav")
    if(nav){
        nav.closest.add("active")
    }
})