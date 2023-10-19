let form=document.getElementById('pos');
form.addEventListener('click', addItem);
function addItem(e){
    e.preventDefault();
let name=document.getElementById('name').value;
var mail=document.getElementById('email').value;
var obj={
        Name:name,
        Email:mail,
     };
     localStorage.setItem(mail,JSON.stringify(obj));
     const keys = Object.keys(localStorage);
     for(let i=0;i<keys.length;i++)
     {

         let object= localStorage.getItem(keys[i]);
        let component=document.getElementById('uList');
        var newElement=document.createElement('li');
        newElement.className='listItems';
        newElement.textContent=object;
        component.appendChild(newElement);
        let newBtn=document.createElement('button');
        newBtn.textContent='Del';
        newElement.setAttribute("onclick", "remove(this)"); 
        newElement.appendChild(newBtn);
     }
     newElement.id=mail;
}
function remove(e)
{
    let removeElement=e.id;
    localStorage.removeItem(removeElement);
    
    
    
    e.parentNode.removeChild(e);
}
