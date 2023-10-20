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
