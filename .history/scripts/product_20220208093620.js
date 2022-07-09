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
var gettbody = document.querySelector("tbody")
var totals = document.querySelector(".total")
var detailProducts = []
var render = () =>{
    var trs = document.querySelectorAll("tbody tr")
    trs.forEach((val) =>{
        val.remove()
    })
    var total = 0
    detailProducts.forEach((val)=>{
        total += val.total
        totals.textContent = total
        var tr = document.createElement("tr")
        tr.innerHTML = `<td>${val.name}</td>
        <td>${val.quantity}</td>
        <td>${val.price}</td>
        <td>${val.total}</td>
        <td>
        <button data-id=${val.id} class="btn-remove">Remove</button>
        </td>`
        gettbody.appendChild(tr) 
    })
}

document.addEventListener("click",function(e){
    var target = e.target
    var buy = target.closest(".buy")
    var inx = buy.dataset.id
    var finx = products.findIndex((val) => val.id == inx)
    var same = -1
    if(finx >= 0){
        if(detailProducts.length === 0){
            same = 0
            detailProducts.push({
                id: products[finx].id,
                name: products[finx].name,
                price: products[finx].price,
                quantity: 1,
                total: products[finx].price,
            })
        }else{
                same = (detailProducts.findIndex((val) => val.id == inx))
                if(same >= 0){
                    detailProducts[same].quantity++
                    detailProducts[same].total += detailProducts[same].price
                }else{
                    detailProducts.push ({
                        id: products[finx].id,
                        name: products[finx].name,
                        price: products[finx].price,
                        quantity: 1,
                        total: products[finx].price,
                    })
                }
        }
        render()
    }
    
})
document.addEventListener("click", function(e){
    var target = e.target
    var remove = target.closest(".btn-remove")
    if(remove){
        var idrm = remove.dataset.id
        var inxrm = detailProducts.findIndex((val) => val.id == idrm)
        detailProducts.splice(inxrm,1)
        render()
        if(detailProducts.length === 0){
            totals.textContent = 0
        }
    }
})