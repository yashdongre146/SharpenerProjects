const form = document.getElementById('addForm');
const items = document.getElementById('items');
const filter = document.getElementById('filter');

for (var i = 0; i < items.children.length; i++) {
  const editBtn = document.createElement('button');
  editBtn.appendChild(document.createTextNode('edit'));
  editBtn.className = "btn btn-primary btn-sm float-right edit";
  items.children[i].appendChild(editBtn);
}

filter.addEventListener('keyup',(e)=>{
  const text = e.target.value.toLowerCase();
  const item = items.getElementsByTagName('li');
  
  Array.from(item).forEach((element)=>{
    console.log(element);
    if (element.firstChild.textContent.toLowerCase().indexOf(text) != -1) {
      element.style.display = "block";
    }
    else{
      element.style.display = "none"
    }
  })
})

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const item = document.getElementById('item');
  const desc = document.getElementById('desc');
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(`${item.value} ${desc.value}`));
  li.className = "list-group-item";
  items.appendChild(li);
  
  const del = document.createElement('button');
  del.appendChild(document.createTextNode('X'));
  del.className = "btn btn-danger btn-sm float-right delete";
  li.appendChild(del);
  
  const editBtn = document.createElement('button');
  editBtn.appendChild(document.createTextNode('edit'));
  editBtn.className = "btn btn-primary btn-sm float-right edit";
  li.appendChild(editBtn);
})

items.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    if (confirm("Are you sure?")) {
      const delItem = e.target.parentElement;
      items.removeChild(delItem);
    }
  }
})
