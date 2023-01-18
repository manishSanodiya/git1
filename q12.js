let form = document.getElementById("myForm");
let itemList = document.getElementById('items');

let nameInput = document.getElementById("myName")
let emailInput = document.getElementById("myemail")
let noInput = document.getElementById("No")


form.addEventListener("submit",addItem);


function addItem(e){
    e.preventDefault();


    let newItem = document.getElementById("myName").value+" -"+document.getElementById("myemail").value+" -"+document.getElementById("No").value;
    
    let li = document.createElement("li");
    li.className = "item";
    li.appendChild(document.createTextNode(newItem));
    itemList.appendChild(li);

    let obj ={
        name:nameInput.value,
        email:emailInput.value,
        no:noInput.value
    }
    let myof = JSON.stringify(obj);
    localStorage.setItem('email',);
}