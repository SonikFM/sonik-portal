export const openInputPicker = id => {
  const inputElem = document.getElementById(id);
  inputElem && inputElem.showPicker();
};
