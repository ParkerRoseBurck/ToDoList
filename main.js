let inputArea = document.getElementById('newInput');
let addButton = document.getElementById('add');
let list = document.querySelector('ul');
let newItem = "";
let deleteButton = document.querySelectorAll('.button');

//function for the "Delete" button
function deleteItem(e){
    let itemLine = e.target.parentNode;
    itemLine.parentNode.removeChild(itemLine);
}

//function for when the checkbox is checked
function completed(e){
    let itemText = e.target.nextElementSibling;
    itemText.style.textDecoration = 'line-through';
    itemText.style.color = '#8C7E9A';

    let itemLine = e.target.parentNode;
    list.appendChild(itemLine);
}

//function for the "Add" button
function addItem(){
    //gets the value from the input box
    newItem = inputArea.value;
    //create new list item
    let newListItem = document.createElement('li');

    //creates a check box and appends it to the list item
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    newListItem.appendChild(checkbox);
    checkbox.onclick = completed;

    //create a text node to hold the list item text from the input and append it to the list item
    let itemText = document.createElement('p');
    itemText.textContent = newItem;
    newListItem.appendChild(itemText);

    //create a delete button and append it to the list item
    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'delete');
    deleteButton.textContent = "Delete";
    newListItem.appendChild(deleteButton);
    deleteButton.onclick = deleteItem;

    //add the whole list item to the to do list 
    list.prepend(newListItem);

    
}
//adds the new to-do item to the list
addButton.onclick = addItem;




