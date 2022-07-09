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
var inxlimit = []
document.addEventListener("click",function(e){

    var target = e.target
    var buy = target.closest(".buy")
    var inx = buy.dataset.id
    var gettbody = document.querySelector("tbody")
    var finx = products.findIndex((val) => val.id == inx)
    console.log(finx)
    console.log(products[finx])
    if(finx){
        // if(!detailProducts){
        //     detailProducts.push = ({
        //         id: products[finx]
        //     })
        // }
        // detailProducts.findIndex((val) => {
        //     if(val.)
        // })
        
        gettbody.innerHTML = `<tr>
        <td>${products[0].name}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        <tr>
        <td colspan="3">Total</td>
        <td class="total" colspan="2">0</td>
        </tr>`
    }
})