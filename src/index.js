import CreateTodo from './createTodo.js'
console.log('check if work bro')

let content = document.querySelector('#content')

let test = CreateTodo('arara','daniel', 'poo', 'L')

content.innerHTML = test.title
