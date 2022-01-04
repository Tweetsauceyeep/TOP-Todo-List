import deleteTodo from './deleteTodo.js';
import displayTodo from './displayTodo.js';
import handleFormInput from './handleForm.js';

let content = document.querySelector('#content');
let form = document.getElementById('inputForm');
let submitButton = document.querySelector('#formsubmit');
let deleteButton = document.getElementsByClassName('deletebutton');
let defaultProjButton = document.querySelector('#defaultproject');

// press button to add todo after filling out form
function loadUI() {
  submitButton.addEventListener('click', () => {
    content.appendChild(displayTodo(handleFormInput(form)));
    console.log('other thing');
    form.reset();
    deleteTodo(deleteButton);
  });

  // experiment: make div invisible on button press.
  defaultProjButton.addEventListener('click', () => {
    if (content.className === 'invisibleDiv') {
      content.style.display = 'block';
    } else {
      content.classList.add('invisibleDiv');
    }
  });
}
export default loadUI;
