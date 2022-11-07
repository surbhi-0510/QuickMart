// var data = [
//     {
//         imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi1.jpg.pagespeed.ic.mkSk-Af1ka.webp",
//         name:"PURSE 1 w",
//         price:"25.00",
//         strikedOffPrice:"$95.00",
//         brand : 'gucci'
//     },{
//         imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi2.jpg.pagespeed.ic.uBrpABaJqp.webp",
//         name:"JEANS 1  w",
//         price:"35.00",
//         strikedOffPrice:"$100.00",
//         brand : 'armani'
//     },{
//         imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi3.jpg.pagespeed.ic.iO_cFEPy2K.webp",
//         name:"WATCH 1  w",
//         price:"35.00",
//         strikedOffPrice:"$100.00",
//         brand : 'adidas'
//     },
//     {
//         imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi4.jpg.pagespeed.ic.kmiQW8I5wx.webp",
//         name:"SNEAKER 1  w",
//         price:"15.00",
//         strikedOffPrice:"$100.00",
//         brand : 'reebok'
//     },
//     {
//         imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi1.jpg.pagespeed.ic.mkSk-Af1ka.webp",
//         name:"PURSE 2  w",
//         price:"25.00",
//         strikedOffPrice:"$95.00",
//         brand : 'reebok'
//     },{
//         imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi2.jpg.pagespeed.ic.uBrpABaJqp.webp",
//         name:"JEANS 2  w",
//         price:"35.00",
//         strikedOffPrice:"$100.00",
//         brand : 'armani'
//     },{
//         imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi3.jpg.pagespeed.ic.iO_cFEPy2K.webp",
//         name:"WATCH 2  w",
//         price:"35.00",
//         strikedOffPrice:"$100.00",
//         brand : 'gucci'
//     },
//     {
//         imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi4.jpg.pagespeed.ic.kmiQW8I5wx.webp",
//         name:"SNEAKER 2  w",
//         price:"15.00",
//         strikedOffPrice:"$100.00",
//         brand : 'gucci'
//     },
//     {
//         imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi1.jpg.pagespeed.ic.mkSk-Af1ka.webp",
//         name:"PURSE 3  w",
//         price:"25.00",
//         strikedOffPrice:"$95.00",
//         brand : 'armani'
//     },{
//         imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi2.jpg.pagespeed.ic.uBrpABaJqp.webp",
//         name:"JEANS 3  w",
//         price:"35.00",
//         strikedOffPrice:"$100.00",
//         brand : 'reebok'
//     },{
//         imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi3.jpg.pagespeed.ic.iO_cFEPy2K.webp",
//         name:"WATCH 3  w",
//         price:"35.00",
//         strikedOffPrice:"$100.00",
//         brand : 'reebok'
//     },
//     {
//         imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi4.jpg.pagespeed.ic.kmiQW8I5wx.webp",
//         name:"SNEAKER 3  w",
//         price:"15.00",
//         strikedOffPrice:"$100.00",
//         brand : 'adidas'
//     },
//     {
//         imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi1.jpg.pagespeed.ic.mkSk-Af1ka.webp",
//         name:"PURSE 4  w",
//         price:"25.00",
//         strikedOffPrice:"$95.00",
//         brand : 'gucci'
//     },{
//         imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi2.jpg.pagespeed.ic.uBrpABaJqp.webp",
//         name:"JEANS 4  w",
//         price:"35.00",
//         strikedOffPrice:"$100.00",
//         brand : 'adidas'
//     },{
//         imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi3.jpg.pagespeed.ic.iO_cFEPy2K.webp",
//         name:"WATCH 4  w",
//         price:"35.00",
//         strikedOffPrice:"$100.00",
//         brand : 'armani'
//     },
//     {
//         imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi4.jpg.pagespeed.ic.kmiQW8I5wx.webp",
//         name:"SNEAKER 4  w",
//         price:"15.00",
//         strikedOffPrice:"$100.00",
//         brand : 'gucci'
//     },
// ]



let fetchURL = async () =>{
    try{
        const url = 'https://fakestoreapi.com/products'
        let res = await fetch(url)
        console.log("res:",res)
        let data = await res.json()
        console.log('data :',data)
        displayData(data)
        document.querySelector('#sortByName').addEventListener('change',()=>{
            sortName(data)
        })
        document.querySelector('#sortByPrice').addEventListener('change',()=>{
        sortPrice(data)
        })
    }
    catch(err){
        console.log('err:',err)
    }
}
fetchURL()

// displayed when page is refreshed
window.addEventListener('load',function(){
    displayData(data)
})

// or simply
// displayData(data)
function displayData(data){
    document.querySelector('#shop_cont').innerText = ''
    data.map(function(e,i,ar){
        var div1 = document.createElement('div')
        var img1 = document.createElement('img')
        img1.src = e.image   
        var name1 = document.createElement('p')
        name1.innerText = e.title
        // var div2 = document.createElement('div')
        var p1 = document.createElement('p')
        p1.innerText = `$ ${e.price}`
        var p3 = document.createElement('button')
        p3.innerText = 'Add to Cart'
        p3.addEventListener("click",function(){
            butpress(e,i)
        })
        // div2.append(p1)
        
        div1.append(img1,name1,p1,p3)
    
        document.querySelector("#shop_cont").append(div1)
    })
}


function sortName(data){
    var sel = document.querySelector('#sortByName').value
    console.log(sel)
    {
        if(sel == 'asc'){
            data.sort(function(a,b){
                if(a.title>b.title) return 1;
                if(a.title<b.title) return -1;
                return 0;
            })
            console.log(data)
            displayData(data)
        }
        else if(sel == 'des'){
            data.sort(function(a,b){
                if(a.title>b.title) return -1;
                if(a.title<b.title) return 1;
                return 0;
            })
            console.log(data)
            displayData(data)
        }
    }
    
}



// sort by price
function sortPrice(data){
    var sel = document.querySelector('#sortByPrice').value
    console.log(sel)
    {
        if(sel == 'lth'){
            data.sort(function(a,b){
                return Number(a.price)-Number(b.price)
            })
            console.log(data)
            displayData(data)
        }
        else if(sel == 'htl'){
            data.sort(function(a,b){
                return Number(b.price)-Number(a.price)
            })
            console.log("****",data)
            displayData(data)
        }
    }
}

// sort by brand
// document.querySelector('#sortByBrand').addEventListener('change',sortBrand)
// function sortBrand(){
//     var sel = document.querySelector('#sortByBrand').value
//     console.log(sel)
//     if(sel == ''){
//         displayData(data)
//     }
//     else{
//         var tempData = data.filter(function(e){
//             return e.brand == sel
//         })
//         displayData(tempData)
//     }
//     console.log("****",data)
// }

var cartData = JSON.parse(localStorage.getItem('cartArr')) || [] 
function butpress(e,i){
    console.log(e,i)
    cartData.push(e)
    localStorage.setItem('cartArr',JSON.stringify(cartData))
}