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
        var editBtn=document.createElement('button');
        newBtn.textContent='Del';
        editBtn.textContent='Edit';
        newElement.setAttribute("onclick", "remove(this)"); 
        editBtn.setAttribute("onclick", "edit(this)");
        newElement.appendChild(newBtn);
        newElement.appendChild(editBtn);
     }
     newElement.id=mail;
     clearInputs();
}
function remove(e)
{
    let removeElement=e.id;
    localStorage.removeItem(removeElement);
    e.parentNode.removeChild(e);
}
function edit(e)
{
    let removeElement=e.parentNode.id;
    let obj = JSON.parse(localStorage.getItem(removeElement));
    let mail=obj.Email;
    let name=obj.Name;
    document.getElementById('name').value =name;
    document.getElementById('email').value =mail;
    localStorage.removeItem(removeElement);
    

}
function clearInputs() { 
    document.getElementById('email').value = ""; 
    document.getElementById('name').value = ""; 

} 