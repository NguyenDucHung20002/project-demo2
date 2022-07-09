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
                quantity: 1,
                total: 0,
            })
        }else{
                same = (detailProducts.findIndex((val) => val.id == inx))
                if(same >= 0){
                    detailProducts[same].quantity++
                    detailProducts[same].total = detailProducts[same].total + detailProducts[same].price
                }else{
                    detailProducts.push ({
                        id: products[finx].id,
                        name: products[finx].name,
                        price: products[finx].price,
                        quantity: 1,
                        total: 0,
                    })
                }
        }
        console.log(detailProducts)
        console.log(products)
        detailProducts.forEach((val)=>{
            gettbody.innerHTML = `<tr>
            <td>${val.name}</td>
            <td>${val.quantity}</td>
            <td>${val.price}</td>
            <td>${val.name}</td>
            <td></td>
            </tr>`
        })
        
    }
})