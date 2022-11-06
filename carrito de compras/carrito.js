let abierto = false;
const abrirCarrito = () => {
  var loadingMask = document.getElementById('abrirCarrito');
  loadingMask.classList.remove('invisible');
};
const cerrarCarrito = () => {
  abierto = false;
};
console.log(abierto);
