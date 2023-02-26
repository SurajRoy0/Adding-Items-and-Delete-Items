var form = document.querySelector('#addForm');
var itemList = document.querySelector('#items');
var filter = document.querySelector('#filter');

//Adiing Items Event
form.addEventListener('submit',addItem);

//Removing Items Event
itemList.addEventListener('click',removeItem);

//Filtering Event
filter.addEventListener('keyup',filterItems);

//Adding Items
function addItem(e){
    e.preventDefault();
    var itemValue = document.querySelector('#inputText').value;
    if(itemValue==''){
        var alertDiv = document.createElement('div');
        var alertText = document.createTextNode('Please Enter Something to Add New Item');
        alertDiv.appendChild(alertText);
        alertDiv.className='alertTextColor'
        var cardDiv = document.querySelector('#main');
        cardDiv.insertBefore(alertDiv,form);
    }
    else{
        //Creating New List
    var newItem = document.createElement('li');
    newItem.className='list-group-item';
    var itemText = document.createTextNode(itemValue);
    newItem.appendChild(itemText);

    //Creating Delete Button
    var deleteBtn =  document.createElement('Button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));

    //Adding An Edit Button
    var editBtn =  document.createElement('Button');
    editBtn.className = 'btn btn-success btn-sm float-right edit';
    editBtn.appendChild(document.createTextNode('Edit'));

    // Ading In The List
    newItem.appendChild(deleteBtn);
    newItem.appendChild(editBtn);
    itemList.appendChild(newItem);
    
    }
    
}

//Removing Items
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            let deleteItem = e.target.parentElement;
            itemList.removeChild(deleteItem);
        }
    }
}


//Filerting Items
function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = itemList.querySelectorAll('li');
    
    //converting to an Array
    var item = Array.from(items);
    // item.forEach(function(item){
    //     var itemName = item.firstChild.textContent;
    //     console.log(item);
    // })

    for(i of item){
        let itemText = i.firstChild.textContent;
        if(itemText.toLowerCase().indexOf(text) != -1){
            i.style.display = 'block';
        }
        else{
            i.style.display = 'none'; 
        }
    }

}

