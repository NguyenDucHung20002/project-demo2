var products = [
    {
        id: 1,
        name: "Samsung J2 Pro",
        price: 100.000,
    },
    {
        id: 2,
        name: "HP Notebook",
        price: 299.000,
    },
    {
        id: 3,
        name: "Panasonic T44 Lite",
        price: 125.000,
    }
]
var detailProducts = [
    {
        id: 1,
        name: "Samsung J2 Pro",
        price: 100.000,
        quantity: 0,
    },
    {
        id: 2,
        name: "HP Notebook",
        price: 299.000,
        quantity: 0,
    },
    {
        id: 3,
        name: "Panasonic T44 Lite",
        price: 125.000,
        quantity: 0,
    }
]

document.addEventListener("click",function(e){

    var target = e.target
    var buy = target.closest(".buy")
    var inx = buy.dataset.id
    var gettbody = document.querySelector("tbody")
    var finx = products.findIndex((val) => val.id == inx)
    if(find){
        
        gettbody.innerHTML = `<tr>
        <td>${products[finx].name}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>`
    }
})