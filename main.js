

// Adding Elements to the Form
let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form Submit Event
form.addEventListener('submit', addItem);
// Delete Event
itemList.addEventListener('click', removeItem);
//Filter Event
filter.addEventListener('keyup', filterItems);

//Add Item
function addItem(e) {
  e.preventDefault();

// Get Input Value
let newItem = document.getElementById('item').value;

// Create New li Element
let li = document.createElement('li');

// Add class
li.className = 'list-group-item';
console.log(li);

// Add text Node With Input Value
li.appendChild(document.createTextNode(newItem));

// Create Delete Button Element
let deleteBtn = document.createElement('button');
// Add Classes to Delete Button
deleteBtn.className = 'btn btn-danger btn-sm float-right delete'; 
// Append Text Node
deleteBtn.appendChild(document.createTextNode('X'));
li.appendChild(deleteBtn);
// Append li to List
itemList.appendChild(li);

}
// Remove Item
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if(confirm('Are You Sure?')) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e) {
// Convert Text to Lowercase
let text = e.target.value.toLowerCase();
// Get lis
let items = itemList.getElementsByTagName('li');
// Convert to an Array
Array.from(items).forEach(function(item) {
  let itemName = item.firstChild.textContent;
  if(itemName.toLowerCase().indexOf(text) != -1) {
    item.style.display = 'block';
  }
  else {
  	item.style.display = 'none';
  }
  });



}