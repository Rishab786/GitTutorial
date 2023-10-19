let form=document.getElementById('submission');
form.addEventListener('submit', addItem);

function addItem(e){
    e.preventDefault();
let name=document.getElementById('name').value;
let mail=document.getElementById('email').value;
let time=document.getElementById('time').value;
let date=document.getElementById('date').value;
    var obj={
        Name:name,
        Email:mail,
        Date:date,
        Time:time
    };
    
    localStorage.setItem(mail,JSON.stringify(obj));
    const keys = Object.keys(localStorage);
    for(let i=0;i<keys.length;i++)
    {
       let object= localStorage.getItem(keys[i]);
       let component=document.getElementById('uList');
       let newElement=document.createElement('li');
       newElement.textContent=object;
       component.appendChild(newElement);
       
    }
    


}
