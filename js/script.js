let pName=document.getElementById('productName')
let pPrice=document.getElementById('productPrice')
let pCat=document.getElementById('productCat')
let pDesc=document.getElementById('productDesc')
let pUpdate=document.getElementById('productUpdate')
let delBtn=document.getElementById('deleteAll')

// console.log(pUpdate)

let pDel=document.getElementById('productDel')
let btn=document.getElementsByTagName('button')[0]

let allproducts=[]
btn.addEventListener('click',function(){
    let productData={
        pname: pName.value ,
        pcat:pCat.value,
        pdesc:pDesc.value,
        pprice:pPrice.value,
    }
    // console.log(productData)
    allproducts.push(productData)
    window.localStorage.setItem('products',JSON.stringify(allproducts))
    getAllProducts()
    clearinputs()
    
})
function getAllProducts(){
    let tabledata=''
    for( let i=0;i<allproducts.length;i++){
            tabledata+=`
            <tr>
            <td>${i}</td>
            <td>${allproducts[i].pname}</td>
            <td>${allproducts[i].pprice}</td>
            <td>${allproducts[i].pcat}</td>
            <td>${allproducts[i].pdesc}</td>
            <td><button  onclick="updateProduct(${i})" >update</button></td>
            <td><button onclick="deleteProduct(${i})">delete</button></td>
            </tr>
`
    }
    
    // console.log(tabledata)
    document.getElementsByTagName('tbody')[0].innerHTML=tabledata

}
// console.log(btn)

if(window.localStorage.getItem('products') !==null ){
    allproducts=JSON.parse(window.localStorage.getItem('products') )
}
getAllProducts()


function clearinputs(){
 

    pPrice.value=""
    pName.value=""
    pCat.value=""
    pDesc.value=""


}



function deleteProduct(selectedRow){
    allproducts.splice(selectedRow,1);
    getAllProducts()
    window.localStorage.setItem('products'.JSON.parse(allproducts))

}

updateBtn=document.getElementById('update')
addproductBtn=document.getElementById("addProduct")

var globalVar=0
function updateProduct(updatingRow){
    updateBtn.style.display="block"
    addproductBtn.style.display="none"

    globalVar=updatingRow
    pPrice.value=allproducts[updatingRow].pprice
    pName.value=allproducts[updatingRow].pname
    pCat.value=allproducts[updatingRow].pcat
    pDesc.value=allproducts[updatingRow].pdesc

}




updateBtn.addEventListener('click',function afterUpdate(){

    allproducts[globalVar].pprice= pPrice.value
    allproducts[globalVar].pname=pName.value
    allproducts[globalVar].pcat= pCat.value
    allproducts[globalVar].pdesc=pDesc.value

    updateBtn.style.display="none"
    addproductBtn.style.display="block"

    getAllProducts()

    clearinputs()

    window.localStorage.setItem('products',JSON.stringify(allproducts))
    

})


delBtn.addEventListener('click',function(){


allproducts.splice(0,allproducts.length);
    getAllProducts()
    window.localStorage.setItem('products', JSON.parse(allproducts))

})