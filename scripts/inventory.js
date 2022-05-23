

function appending(){
    let data=JSON.parse(localStorage.getItem("products"))||[]

    data.forEach(function(ele,index) {
        console.log(ele)
        let box=document.createElement("div");
        // box.setAttribute("id","all_products")
    
        let type=document.createElement("p")
        type.innerText=ele.type;

        let desc=document.createElement("p");
        desc.innerText=ele.desc;

        let price=document.createElement("p");
        price.innerText=ele.price;

        let img=document.createElement("img")
        img.src=ele.img;

        let btn=document.createElement("button");
        btn.innerText="Remove"
        btn.addEventListener('click',function(){
            remove(index)
        })

        box.append(type,desc,price,img,btn)
        document.querySelector("#all_products").append(box);
    });


}


function remove(index){
    event.target.parentNode.remove()
    // console.log(index)
     let data=JSON.parse(localStorage.getItem("products"))||[]

    let newdata=data.filter(function(ele,i){
        if(i===index){
            let trash=JSON.parse(localStorage.getItem("trash"))||[]
            trash.push(ele);
            localStorage.setItem("trash",JSON.stringify(trash))
        }
        else{
            return i!==index
        }
    })

    localStorage.setItem("products",JSON.stringify(newdata))

    //appending()
    console.log(newdata)

}
appending()