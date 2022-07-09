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
var detailProducts = []
var inxlimit = []
document.addEventListener("click",function(e){

    var target = e.target
    var buy = target.closest(".buy")
    var inx = buy.dataset.id
    var gettbody = document.querySelector("tbody")
    var finx = products.findIndex((val) => val.id == inx)
    var same = -1
    if(finx >= 0){
        if(detailProducts.length === 0){
            same = 0
            detailProducts.push({
                id: products[finx].id,
                name: products[finx].name,
                price: products[finx].price,
                quantity: 1
            })
        }else{
                same = (detailProducts.findIndex((val) => val.id == inx))
                if(same >= 0){
                    detailProducts[same].quantity++
                    detailProducts[same].price = products.price * detailProducts[same].quantity
                }else{
                    detailProducts.push ({
                        id: products[finx].id,
                        name: products[finx].name,
                        price: products[finx].price,
                        quantity: 1
                    })
                }
        }
        console.log(detailProducts)
        console.log(products)
        gettbody.innerHTML = `<tr>
        <td>${products[finx].name}</td>
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