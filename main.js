
//single element selector
//1 document.getElementById('my-form');
//2 document.querySelector('h1');

//multiple element selector
//1 console.log(document.querySelectorAll('.items'));
//2 console.log(document.getElementsByClassName('item'));

const btn = document.querySelector('.btn');
btn.addEventListener('click',(e) => {
  
    document.querySelector('body').style.background = 'blue';
})
btn.addEventListener('mouseover',(e) => {
    document.querySelector('#my-form').style.background = '#ccc';
   
})
btn.addEventListener('mouseout',(e) => {
    document.querySelector('#my-form').style.background = 'powderblue';
    
})

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
const nameValue = nameInput.nodeValue;

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput==='' || emailInput===''){
        msg.classList.add('error');
        msg.innerHTML = 'fill all fields';
        setTimeout(() => msg.remove(),3000);
    }else{
        // const li = document.createElement('li');
        // li.appendChild(document.createElement(`${nameInput.value} : ${emailInput.value}`));


        // userList.appendChild(li);

        // nameInput.value ='';
        // emailInput.value = '';



        //storing detail in local storage
        //let obj = nameInput.value+' '+emailInput.value;
        let obj ={
            name:nameInput.value,
            email:emailInput.value
        }
        let myObj = JSON.stringify(obj);
        localStorage.setItem('detail',myObj);
        

    }
    
}


