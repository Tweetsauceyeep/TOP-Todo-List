// bruh this literally breaks my code no joke bruh idk why but yeah pretty much
function addButtonListener(
  button,
  typeOfListener,
  contentDiv,
  functions,
  form,
) {
  button.addEventListener(typeOfListener, () => {
    contentDiv.append(functions);
    
    console.log('hello')
  });
}

export default addButtonListener;
