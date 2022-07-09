var picker = [
    {
        id: 1,
        name: "pink",
        background: true,
        incorrect: false,
    },
]
picker.length
var ul = document.querySelector("ul")
var add = document.querySelector(".add-picker")
var input = document.querySelector(".input-picker")
var h2 = document.querySelector("h2")

var renders = (picker) =>{
    var lis = document.querySelectorAll("ul li")
    lis.forEach((li) =>{
        li.remove()
    })
    picker.forEach((val) => {
        var li = document.createElement("li") 
        li.innerHTML = `<p class="get-id" data-id=${val.id}>${val.name}</p>`
        li.style.backgroundColor = val.name
        li.className = "show-color"
        if(li.getAttribute("style"))
        {
            ul.appendChild(li)
        }
    })

}
renders(picker)
var addcolor = () =>{
    var textInput = input.value
    if(!textInput){
        alert("input is empty!")
    }else{
        var find = picker.findIndex((val) => val.name.toLowerCase() === textInput.toLowerCase().trim())
        var span = document.createElement("span")
        span.style.color = textInput
        
        if(find < 0 && span.getAttribute("style")){
            picker.push({
                id: Date.now(),
                name: textInput,
                background: false,
                incorrect: false,
            })
        }
        
    }
    input.value = ''
    renders(picker)
}
add.addEventListener("click",function(e){
    addcolor()
})
document.addEventListener("keyup",function(e){
    if(e.keyCode === 13){
        addcolor()
    } 
})


document.addEventListener("click", function(e){
    var target = e.target
    var liColor = target.closest(".get-id")
    var inx = liColor.dataset.id
    if(liColor){
        var body = document.querySelector("body")
        picker.forEach((val) => {
            if(inx == val.id){
                body.style.backgroundColor = val.name
            }
        })
    }
})

