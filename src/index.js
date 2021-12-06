import displayTodo from './modules/displayTodo.js';
import handleFormInput from './modules/handleForm.js';
import addButtonListener from './modules/addButtonListener';

let content = document.querySelector('#content');
let form = document.getElementById('inputForm');
let submitButton = document.querySelector('#formsubmit');

console.log(form)

// press button to add todo after filling out form
addButtonListener(
  submitButton,
  'click',
  content,
  displayTodo(handleFormInput(form)),
  form
);
