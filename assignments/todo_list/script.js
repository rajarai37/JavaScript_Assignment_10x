const input=document.querySelector('input');
const button=document.querySelector('button');
const para=document.querySelector('.todos');
let count=0;
button.addEventListener('click',function() {
    console.log(input.value)
    if(input.value){
        var newTodo=document.createElement('p');
        newTodo.innerHTML=input.value;
        newTodo.setAttribute('key', count++);
        para.appendChild(newTodo);
        newTodo.addEventListener('click',function(){
            newTodo.remove()
        })
    }
    input.value=""
})