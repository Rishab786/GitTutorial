var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);



function addItem(e){
  e.preventDefault();
var newItem = document.getElementById('item').value;
 var li = document.createElement('li');
 li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem));
  var editBtn=document.createElement('button');
 var deleteBtn = document.createElement('button');
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
editBtn.className='btn btn-danger btn-sm float-right delete editClass';
deleteBtn.appendChild(document.createTextNode('X'));
editBtn.appendChild(document.createTextNode('edit'));
 li.appendChild(deleteBtn);
 li.appendChild(editBtn);
itemList.appendChild(li);
}

function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
var filter = document.getElementById('filter');
filter.addEventListener('keyup', filterItems);
function filterItems(e){
     var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
      var itemName = item.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

