import CreateTodo from './createTodo.js'

// takes values from the form and uses it to create a new obj including the objects values
export default function handleFormInput(formItem) {
  let title = formItem.elements[0].value 
  let description = formItem.elements[1].value 
  let dueDate = formItem.elements[2].value 
  let priority = formItem.elements[3].value

  let item = CreateTodo(title, description, dueDate, priority);
  return item;
}


