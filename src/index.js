import CreateTodo from './modules/createTodo.js';
import displayTodo from './modules/displayTodo.js';
import handleFormInput from './modules/handleForm.js';

let content = document.querySelector('#content');
let form = document.querySelector('#inputForm')
let submitButton = document.querySelector('#formsubmit')

//let bruh = handleFormInput(form)

// press button to add todo after filling out form
submitButton.addEventListener('click',()=>{
  console.log('click works')
  content.appendChild(displayTodo(handleFormInput(form)))
})

console.log(form.elements[1].value)
