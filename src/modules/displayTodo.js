import '../styles.css'

function displayTodo(todoItems) {
  // convert todo object into an array and iterate through it
  // create a new div and append todo item divs to it and append it to main note div
  const todoItem = Object.values(todoItems)
  const div = document.createElement('div');
  div.classList.add('todoNote')  
  for (let i = 0; i < todoItem.length; i++) {
    div.appendChild(createDiv(todoItem[i]));

  }
  return div
}

function createDiv(innards) {
  const divThing = document.createElement('div');
  divThing.classList.add('todoItem')
  divThing.textContent = innards;
  return divThing
}



export default displayTodo;
