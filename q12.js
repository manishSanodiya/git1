<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>form</title>
    <style>
        form{
            border-style: solid;
            margin-left: 350px;
            text-align: center;
            height: 350px;width: 550px;
            background-color: aqua;
           
        }
        input{
            background-color: #e27c7c;
            margin-top: 35px;
            height: 25px;
            width: 300px;
            color: green;
            
        }
        body{
           
            background-color:rgb(113, 175, 113);
        }
        button{
            background-color: rgb(20, 78, 8);
            color: blueviolet;
        }
        
    </style>
</head>
<body>
    <div class="container">
        <form id="myForm">
            name: <input type="text"class="Name"id="myName"><br>
            email: <input type="text" class="email" id="myemail"><br>
            phoneNo: <input type="text" class="no" id="No"><br>
            <input type="submit" value="submit" class="Submit">
        </form>
    </div>
    
    <ul id="items">
        <li class="item" ><button class="deleteBtn" id="deleteBtn" >delete</button></li>
        
    </ul>
   
</body>
<script >
    let form = document.getElementById("myForm");
let itemList = document.getElementById('items');

let nameInput = document.getElementById("myName")
let emailInput = document.getElementById("myemail")
let noInput = document.getElementById("No")


form.addEventListener("submit",addItem);
itemList.addEventListener('click',removeItem);


function addItem(e){
    e.preventDefault();


    let newItem = document.getElementById("myName").value+" -"+document.getElementById("myemail").value+" -"+document.getElementById("No").value;
    
    let li = document.createElement("li");
    li.className = "item";
    li.appendChild(document.createTextNode(newItem));

    let del = document.createElement('button');
    let ed = document.createElement('button');
    ed.className = "deleteBtn";
    del.className = "deleteBtn";
    del.appendChild(document.createTextNode("delete"));
    ed.appendChild(document.createTextNode("edit"));
    li.appendChild(del);
    li.appendChild(ed);
    itemList.appendChild(li);


    let obj ={
        name:nameInput.value,
        email:emailInput.value,
        no:noInput.value
    }
    let myof = JSON.stringify(obj);
    localStorage.setItem(emailInput.value,myof);
}
//for removing item;
function removeItem(e){
    if(e.target.classList.contains("deleteBtn")){
        let li = e.target.parentElement;
        itemList.removeChild(li);
        let obj ={
            name:nameInput.value,
            email:emailInput.value,
            no:noInput.value
        }
        let myof = JSON.stringify(obj);
        localStorage.removeItem(emailInput.value,myof);
    }
}
</script>
</html>
