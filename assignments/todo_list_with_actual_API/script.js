var input = document.querySelector('input')
var todosDiv = document.querySelector('div.todos');
var allTasks_button = document.querySelector('#alltasks');
var completed_button = document.querySelector('#completed');
var pending_button = document.querySelector('#pending');
var heading = document.querySelector('span')

var todos = []
completed_button.style.background = "rgb(103, 224, 87)"
pending_button.style.background = "rgb(236, 86, 59)"

async function main() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos'); // by default the method is "GET" but you can change it to POST by giving second parameter "method: 'POST ; body: JSON.stringify({title: "lorem ipsum"})" 
        const json = await response.json();
        todos = json.slice(0,10)
        console.log(todos)
        todos.forEach((todo,index) => {
            const newTodo = document.createElement('p')
            newTodo.setAttribute('key',index);
            newTodo.innerHTML = todo.title
            todosDiv.appendChild(newTodo);
            //console.log(todo.completed)
            if (todo.completed){
                newTodo.style.color = "green";
            }else{
                newTodo.style.color = "red";
            }
        })
    } catch(e){
        console.log(e);
    }   
}

main();

allTasks_button.addEventListener('click',ShowAllTasks)
function ShowAllTasks(){
    todosDiv.innerHTML = ""
    heading.innerHTML = "All";
    todos.forEach((todo,index) => {
        const newTodo = document.createElement('p');
        newTodo.setAttribute('key',index);
        newTodo.innerHTML = todo.title
        todosDiv.appendChild(newTodo);
        if (todo.completed){
            newTodo.style.color = "green";
        }else{
            newTodo.style.color = "red";
        }
    })
}

completed_button.addEventListener('click',ShowCompletedTasks)
function ShowCompletedTasks(){
    todosDiv.innerHTML = ""
    heading.innerHTML = "Completed";
    todos.filter(todo => todo.completed).forEach((todo,index) => {
        const newTodo = document.createElement('p');
        newTodo.setAttribute('key',index);
        newTodo.innerHTML = todo.title
        todosDiv.appendChild(newTodo);
    })
}

pending_button.addEventListener('click',ShowPendingTasks)
function ShowPendingTasks(){
    todosDiv.innerHTML = ""
    heading.innerHTML = "Pending";
    todos.filter(todo => todo.completed === false).forEach((todo,index) => {
        const newTodo = document.createElement('p');
        newTodo.setAttribute('key',index);
        newTodo.innerHTML = todo.title
        todosDiv.appendChild(newTodo);
    })
}