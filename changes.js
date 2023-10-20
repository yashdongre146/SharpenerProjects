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
