import displayTodo from './displayTodo';
import createTodo from './createTodo.js'

function handleFormInput(form) {
  let title = form.elements[0].value;
  let description = form.elements[1].value;
  let dueDate = form.elements[2].value;
  let priority = form.elements[3].value;

  let item = createTodo(title, description, dueDate, priority);
  console.log(item)
  return item;
}


export default handleFormInput
