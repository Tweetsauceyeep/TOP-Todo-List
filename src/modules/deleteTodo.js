export default function deleteTodo(button){
  for (let i = 0; i <button.length; i++) {
    button[i].addEventListener('click', e=> {
      e.currentTarget.parentNode.remove();
    }, false); //idk why the false is there just remove if stuff breaks
}
}
