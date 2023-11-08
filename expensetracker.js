const expenseamount = document.getElementById('expenseamount');
const choosedescription = document.getElementById('choosedescription');
const form = document.getElementById('form');
const items = document.getElementById('items');
const selectcategory = document.getElementById('selectcategory');

for(let key in localStorage){
  if(localStorage.hasOwnProperty(key) && !key.startsWith('eruda-')){
    const data = JSON.parse(localStorage.getItem(key));
    
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.appendChild(document.createTextNode(data.expenseamount))
    li.appendChild(p);
    li.appendChild(document.createTextNode(data.choosedescription));
    li.appendChild(document.createTextNode(data.selectcategory));
    
    const edit = document.createElement('button');
    const del = document.createElement('button');
    
    edit.appendChild(document.createTextNode('edit'));
    del.appendChild(document.createTextNode('X'));
    edit.className = "edit";
    del.className = "delete";
    
    li.appendChild(edit);
    li.appendChild(del);
    items.appendChild(li);
  }
}

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const obj = {
    expenseamount: expenseamount.value,
    choosedescription: choosedescription.value,
    selectcategory: selectcategory.value
  }
  
  localStorage.setItem(expenseamount.value,JSON.stringify(obj));
  
  const li = document.createElement('li');
  const p = document.createElement('p');
  p.appendChild(document.createTextNode(expenseamount.value));
  li.appendChild(p);
  li.appendChild(document.createTextNode(choosedescription.value));
  li.appendChild(document.createTextNode(selectcategory.value));
  
  const edit = document.createElement('button');
  const del = document.createElement('button');
  
  edit.appendChild(document.createTextNode('edit'));
  edit.className = "edit";
  del.appendChild(document.createTextNode('X'));
  del.className = "delete";
  li.appendChild(edit);
  li.appendChild(del);
  items.appendChild(li);
})

items.addEventListener('click',(e)=>{
  if (e.target.classList.contains('delete')) {
    if (confirm("Are you sure!")) {
      const li = e.target.parentElement;
      localStorage.removeItem(li.firstElementChild.innerText);
      items.removeChild(li);
    }
  }
})

items.addEventListener('click',(e)=>{
  if (e.target.classList.contains('edit')) {
    if (confirm("Are you sure!")) {
      const li = e.target.parentElement;
      const data = JSON.parse(localStorage.getItem(li.firstElementChild.innerText));
      
      expenseamount.value = data.expenseamount;
      choosedescription.value = data.choosedescription;
      selectcategory.value = data.selectcategory;
      
      localStorage.removeItem(li.firstElementChild.innerText);
      items.removeChild(li);
    }
  }
})
￼Enter
