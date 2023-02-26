var form = document.querySelector('#addForm');
var itemList = document.querySelector('#items');

//Adiing Items
form.addEventListener('submit',addItem);

//Removing Items
itemList.addEventListener('click',removeItem);

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

