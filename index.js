let form=document.getElementById('submission');
form.addEventListener('submit', addItem);
function addItem(e){
    e.preventDefault();
    localStorage.setItem('name',document.getElementById('name').value);
    localStorage.setItem('email',document.getElementById('email').value);
    localStorage.setItem('date',document.getElementById('date').value);
    localStorage.setItem('time',document.getElementById('time').value);


}