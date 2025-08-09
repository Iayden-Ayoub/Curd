
        
   


let title=document.getElementById('text');
let price=document.getElementById('price');
let taxes=document.getElementById('taxes');
let abs=document.getElementById('abs');
let discount=document.getElementById('discount');
let red=document.getElementsByClassName('red')[0];
let count=document.getElementById('count');
let category=document.getElementById('category');
let table=document.getElementById('tablee');
let Create=document.getElementById('Create');
let delet=document.getElementById('delet');
let search=document.getElementById('search');

let mod="create";
let indix;

function counteur(){
    if(price.value != '')
   {let moyenne=(+price.value + +taxes.value + +abs.value) - +discount.value;
   red.innerHTML=moyenne ;
red.style.background="green"}
else{
    red.innerHTML="" ;
    red.style.background="red"
}}




let list;
if(localStorage.keyy != null){
    list=  JSON.parse(localStorage.keyy) ;
}else{
     list=[];
}
Create.onclick=function(){
    let phone={
        title:title.value.toLowerCase(),
        price:price.value,
        taxes:taxes.value,
        abs:abs.value,
        count:count.value,
        discount:discount.value,
        red:red.innerHTML,
        category:category.value.toLowerCase()
    }
    if(title.value!="" && price.value!="" && category.value!=""&& phone.count<100){
        if(mod==="create"){
            if(phone.count>1){
            for(i=0;i<phone.count;i++){
                list.push(phone)
            }
            }else{
                list.push(phone)
            }
            clear()
        }else{
            Create.innerHTML="create";
            count.style.display="block";
            list[indix]=phone
            mod="create";
            clear()
        }
    }

    
    localStorage.setItem('keyy', JSON.stringify(list));
    afficher()
    
}




function clear(){
    title.value=""
    abs.value=""
    category.value=""
    taxes.value=""
    price.value=""
    discount.value=""
    abs.value=""
    count.value=""
    red.innerHTML=""
    red.style.background="red"
    Create.innerHTML="Create";
}

let varr;

function afficher(){
    let a="";
    for(i =0;i<list.length;i++){
        
        a+=`<tr>
        <td>${i+1}</td>
        <td>${list[i].title}</td>
        <td>${list[i].price}</td>
        <td>${list[i].abs}</td>
        <td>${list[i].taxes}</td>
        <td>${list[i].discount}</td>
        <td>${list[i].red}</td>
        <td>${list[i].category}</td>
        <td><button onclick="update(${i})"  id="update">Update</button></td>
        <td><button onclick="del(${i})" id="delet">Delet</button></td>
        </tr>`}
        table.innerHTML=a
        if ((list.length)> 2) {
            const delall = document.getElementById("delall");
            delall.style.display = "block";
            delall.innerHTML = `DELETE ALL (${list.length})`;
        }else{
            delall.style.display = "none";
            delall.innerHTML = `DELETE ALL (${0})`;
        }
    
}
afficher()


function del(i){
     
     list.splice(i, 1);
     localStorage.keyy= JSON.stringify(list)
     afficher()
     
}

delall.onclick=function() {
    list.splice(0);
    localStorage.clear() ;
    afficher()
    location.reload()
}

function update(i){
     title.value=list[i].title;
     price.value=list[i].price;
     taxes.value=list[i].taxes;
     abs.value=list[i].abs;
     red.innerHTML=list[i].red;
     discount.value=list[i].discount;
     category.value=list[i].category;
     mod="Modifier";
     indix=i;
     Create.innerHTML="Modifier";
     count.style.display="none";
     scroll({top:0,behavior:"smooth"})
     afficher()
}


/* search.onkeyup=function(){
    let a="";
    for(i=0;i<list.length;i++){
        if (list[i].title.includes(search.value)) {
            a+=`<tr>
        <td>${i}</td>
        <td>${list[i].title}</td>
        <td>${list[i].price}</td>
        <td>${list[i].abs}</td>
        <td>${list[i].taxes}</td>
        <td>${list[i].discount}</td>
        <td>${list[i].red}</td>
        <td>${list[i].category}</td>
        <td><button onclick="update(${i})"  id="update">Update</button></td>
        <td><button onclick="del(${i})" id="delet">Delet</button></td>
        </tr>`
        
        }
    
        if (list[i].category.includes(search.value)) {
            a+=`<tr>
        <td>${i}</td>
        <td>${list[i].title}</td>
        <td>${list[i].price}</td>
        <td>${list[i].abs}</td>
        <td>${list[i].taxes}</td>
        <td>${list[i].discount}</td>
        <td>${list[i].red}</td>
        <td>${list[i].category}</td>
        <td><button onclick="update(${i})"  id="update">Update</button></td>
        <td><button onclick="del(${i})" id="delet">Delet</button></td>
        </tr>`
        
        }
    }table.innerHTML=a ;
    
} */

function searchBy(id){
    if(id==="searchTitle"){
        search.placeholder="SearchTitle";
        let a="";
        
    for(i=0;i<list.length;i++){
        if (list[i].title.includes(search.value.toLowerCase())) {
            a+=`<tr>
        <td>${i}</td>
        <td>${list[i].title}</td>
        <td>${list[i].price}</td>
        <td>${list[i].abs}</td>
        <td>${list[i].taxes}</td>
        <td>${list[i].discount}</td>
        <td>${list[i].red}</td>
        <td>${list[i].category}</td>
        <td><button onclick="update(${i})"  id="update">Update</button></td>
        <td><button onclick="del(${i})" id="delet">Delet</button></td>
        </tr>`
        
        }
    }
    table.innerHTML=a ;
    search.value="";
    }else{
        search.placeholder="SearchCategory";
        let a="";
        for(i=0;i<list.length;i++){
        if (list[i].category.includes(search.value.toLowerCase())) {
            a+=`<tr>
        <td>${i}</td>
        <td>${list[i].title}</td>
        <td>${list[i].price}</td>
        <td>${list[i].abs}</td>
        <td>${list[i].taxes}</td>
        <td>${list[i].discount}</td>
        <td>${list[i].red}</td>
        <td>${list[i].category}</td>
        <td><button onclick="update(${i})"  id="update">Update</button></td>
        <td><button onclick="del(${i})" id="delet">Delet</button></td>
        </tr>`
        }
    }table.innerHTML=a ;
    search.value="";
    }
    search.focus()
} 


