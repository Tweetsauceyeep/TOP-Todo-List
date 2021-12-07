import displayTodo from './modules/displayTodo.js';
import handleFormInput from './modules/handleForm.js';
//import addButtonListener from './modules/addButtonListener';
//^ this func dont work bruh

let content = document.querySelector('#content');
let form = document.getElementById('inputForm');
let submitButton = document.querySelector('#formsubmit');

// press button to add todo after filling out form

/*
addButtonListener(
  submitButton,
  'click',
  content,
  displayTodo(handleFormInput(form)),
  form
);
*/

submitButton.addEventListener('click', ()=> {
  content.appendChild(displayTodo(handleFormInput(form)))
  console.log('other thing')
  form.reset()
})

