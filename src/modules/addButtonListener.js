function addButtonListener(button, typeOfListener, contentDiv, functions, form) {
  button.addEventListener(typeOfListener, () => {
    contentDiv.appendChild(functions);
    form.reset();
  });
}

export default addButtonListener
