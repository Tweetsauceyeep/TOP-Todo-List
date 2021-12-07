import '../styles.css'
import deleteTodo from './deleteTodo.js'


function displayTodo(todoItemsNote) {
  // convert todo object into an array and iterate through it
  // create a new div and append todo item divs to it and append it to main note div
  let todoItem = Object.values(todoItemsNote)
  let div = document.createElement('div');
  div.classList.add('todoNote')  
  for (let i = 0; i < todoItem.length; i++) {
    div.appendChild(createDiv(todoItem[i]));
  }
  div.appendChild(createButton())
  return div
}

function createDiv(innards) {
  const divThing = document.createElement('div');
  divThing.classList.add('todoItem')
  divThing.textContent = innards;
  return divThing
}

function createButton(){
  const button = document.createElement('button')
  button.classList.add('deletebutton')
  button.textContent = 'delete'
  return button
}


export default displayTodo;
