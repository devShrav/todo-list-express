// create deleteBtn variable for all elements with class fa-trash
const deleteBtn = document.querySelectorAll('.fa-trash')

// create item variable and assign it to all span selectors under item class.
const item = document.querySelectorAll('.item span')

//  create itemCompleted and assign it to all completed class under span selector in item class
const itemCompleted = document.querySelectorAll('.item span.completed')

// adding an array of click event listeners on deleteBtn and calling deleteItem function when the event is triggered
Array.from(deleteBtn).forEach((element)=>{
    element.addEventListener('click', deleteItem)
})

// adding an array of click event listeners on item and calling markComplete function when the event is triggered
Array.from(item).forEach((element)=>{
    element.addEventListener('click', markComplete)
})

// adding an array of click event listeners on itemCompleted and calling markUnComplete function when the event is triggered
Array.from(itemCompleted).forEach((element)=>{
    element.addEventListener('click', markUnComplete)
})

// Async function declaration
async function deleteItem(){
    const itemText = this.parentNode.childNodes[1].innerText // extracts text value from the specified list item.
    try{ //try block 
        const response = await fetch('deleteItem', { //response fetch function which gets data from deleteItem route
            method: 'delete', //sets the CRUD method for the route
            headers: {'Content-Type': 'application/json'}, //content type assignment
            body: JSON.stringify({ //body of the response set as a string format of JSON itemFromJS
              'itemFromJS': itemText
            })
          })
        const data = await response.json() //waiting to get json back from the server
        console.log(data) // displaying the data from the server
        location.reload() //refreshing the page

    }catch(err){ //catch block
        console.log(err) // displaying the error
    }
}

async function markComplete(){
    const itemText = this.parentNode.childNodes[1].innerText
    try{
        const response = await fetch('markComplete', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemFromJS': itemText
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function markUnComplete(){
    const itemText = this.parentNode.childNodes[1].innerText
    try{
        const response = await fetch('markUnComplete', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemFromJS': itemText
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}