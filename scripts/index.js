//store the products array in localstorage as "products"

function product(t,d,p,i){
   this.type=t;
   this.desc=d;
   this.price=p;
   this.img=i;
}

function storedata(e){
    e.preventDefault()
    console.log("hiii")
    let form=document.querySelector("#products")
    let type=form.type.value;
    let desc=form.desc.value;
    let price=form.price.value;
    let img=form.image.value;

    console.log(type,desc,price,img)

    let obj1=new product(type,desc,price,img)
    console.log(obj1)

    let data=JSON.parse(localStorage.getItem("products"))||[]
    data.push(obj1)

    localStorage.setItem("products",JSON.stringify(data))
}


//let database=localStorage.setItem("product",JSON.stringify(data))