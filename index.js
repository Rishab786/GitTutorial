var elements=document.getElementsByClassName("list-group-item");
elements[1].style.backgroundColor='green';
elements[2].hidden = true;
var items=document.querySelectorAll(".list-group-item");
items[1].style.color='green';
for(let i=0;i<items.length;i++)
{
    if(i%2==0)
    {
        items[i].style.backgroundColor='green';
    }
}



