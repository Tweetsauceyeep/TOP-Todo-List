import CreateTodo from './modules/createTodo.js'
console.log('check if work bro')

let content = document.querySelector('#content')

let test = CreateTodo('Do me','daniel', 'poo', 'L')

content.innerHTML = test.title
