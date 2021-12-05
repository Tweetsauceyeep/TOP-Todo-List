import CreateTodo from './createTodo.js'

// takes values from the form and uses it to create a new obj including the objects values
function handleFormInput(form) {
  let title = form.elements[0].value;
  let description = form.elements[1].value;
  let dueDate = form.elements[2].value;
  let priority = form.elements[3].value;

  let item = CreateTodo(title, description, dueDate, priority);
  return item;
}


export default handleFormInput
