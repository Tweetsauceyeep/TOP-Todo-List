import deleteTodo from './modules/deleteTodo.js';
import displayTodo from './modules/displayTodo.js';
import handleFormInput from './modules/handleForm.js';
//import addButtonListener from './modules/addButtonListener';
//^ this func dont work bruh

let content = document.querySelector('#content');
let form = document.getElementById('inputForm');
let submitButton = document.querySelector('#formsubmit');
let deleteButton = document.getElementsByClassName('deletebutton');

// press button to add todo after filling out form
submitButton.addEventListener('click', () => {
  content.appendChild(displayTodo(handleFormInput(form)));
  console.log('other thing');
  form.reset();
  deleteTodo(deleteButton);
});

