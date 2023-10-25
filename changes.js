/*
//changes to youtuber HTML file
const headerTitle = document.getElementById("header-title");
const addItems = document.getElementsByClassName("title");

headerTitle.style.border = "2px solid black";
addItems.innerHTML = "<b>Add Items</b>"

//Making new changes

var items = document.getElementsByClassName("list-group-item");

items[2].style.background = "green";
items[0].style.fontWeight = "bold";
items[1].style.fontWeight = "bold";
items[3].style.fontWeight = "bold";

//Making new changes
var li = document.getElementsByTagName("li");
li[4].style.background = "grey";

//Making new changes
var qitem2 = document.querySelector('list-group-item:nth-child(2)');
qitem2.style.background = "green";

var qitem3 = document.querySelector('list-group-item:nth-child(3)');
qitem2.style.display = "none";

//another deriverble
var qaitems = document.querySelectorAll('list-group-item');
qaitems[1].style.color = "green";

for(let i = 0; i< qaitems.length;i+=2){
  qaitems[i].style.background = "green";
}

// Adding del and edit functionality
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);

// Add item
function addItem(e) {
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');
  
  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  
  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  
  // Append button to li
  li.appendChild(deleteBtn);
  
  // Append li to list
  itemList.appendChild(li);
  
    // Create edit button element
    var editBtn = document.createElement('button');
  
    // Add classes to edit button
    editBtn.className = 'btn btn-default delete';
  
    // Append text node
    editBtn.appendChild(document.createTextNode('edit'));
  
    // Append button to li
    li.appendChild(editBtn);
  
    // Append li to list
    itemList.appendChild(li);
  }
  
  // Remove item
  function removeItem(e) {
    if (e.target.classList.contains('delete')) {
      if (confirm('Are You Sure?')) {
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  }
*/
  // submit form details to local storage
  const name = document.getElementById('name');
    const email = document.getElementById('email');
    const form = document.getElementById('form');

    form.addEventListener('submit',(e)=>{
      e.preventDefault();
      localStorage.setItem("name", name.value);
      localStorage.setItem("email", email.value);
    })
