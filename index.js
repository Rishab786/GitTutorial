let form=document.getElementById('submission');
form.addEventListener('submit', addItem);

function addItem(e){
    e.preventDefault();
let name=document.getElementById('name').value;
let mail=document.getElementById('email').value;
let time=document.getElementById('time').value;
let date=document.getElementById('date').value;
    let obj={
        Name:name,
        Email:mail,
        Date:date,
        Time:time
        

    };
    localStorage.setItem('user',obj);
    console.log(obj);


}