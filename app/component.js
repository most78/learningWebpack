export default (text = 'Hola mundo') => {
  const element = document.createElement('div');
  element.innerHTML = text;
  return element;
};
