import CreateTodo from './modules/createTodo.js';
import displayTodo from './modules/displayTodo';
import handleFormInput from './modules/displayTodo';


let content = document.querySelector('#content');
let form = document.querySelector('#inputform')
let submitButton = document.querySelector('#formsubmit')

let sampleObj = CreateTodo('Do english Reqs', 'Make Essay', '10/21/21', 'URGENT')

let bruh =handleFormInput(form)
console.log(bruh)

