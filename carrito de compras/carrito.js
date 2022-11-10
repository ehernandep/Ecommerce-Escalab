let cart = document.querySelector('#abrirCarrito');
let abierto = document.getElementById('cart-icon');
let cerrado = document.getElementById('cerrarCarrito');
let borrarTennis = document.getElementById('cart-remove');
let buyNow = document.querySelector('.btn-buy');
let pago = document.querySelector('.pago');
const arrayObjetosGuardados = [];

const comprar = () => {
  pago.classList.add('pagoclick');
};

const abrirCart = () => {
  cart.classList.add('open');
  pago.classList.remove('pagoclick');
  const objetosCarrito = JSON.parse(localStorage.getItem('item'));
  mostrarProductos(objetosCarrito);
};
abierto.addEventListener('click', abrirCart);

const cerrarCarrito = () => {
  cart.classList.remove('open');
};
cerrado.addEventListener('click', cerrarCarrito);

const añadirCarrito = (title, price, img) => {
  const guardarItemEnCarrito = { title: title, price: price, img: img };
  arrayObjetosGuardados.push(guardarItemEnCarrito);
  localStorage.setItem('item', JSON.stringify(arrayObjetosGuardados));
};

const mostrarProductos = (objetos) => {
  let cartshoes = '';
  objetos.forEach((zapato) => {
    cartshoes += `<div class="d-flex justify-content-center"><img class="cart-img" src=${zapato.img} /></div>
        <div>
          <div class="product-title">${zapato.title}</div>
          <div class="product-price">Precio: ${zapato.price}</div>
          <div class="d-flex justify-content-center"><button class="btn bx bxs-trash cart-remove" id="cart-remove" onclick="borrarCarrito('${zapato.title}')"></button></div>
          <div class="lineSeparation"></div>
        </div>`;
  });
  document.getElementById('cart-content').innerHTML = cartshoes;
};

const borrarCarrito = (zapatoBorrar) => {
  const objetosCarrito = JSON.parse(localStorage.getItem('item'));
  objetosCarrito.forEach((zapato, index) => {
    if (zapato.title === zapatoBorrar) {
      objetosCarrito.splice(index, 1);
    }
  });
  localStorage.setItem('item', JSON.stringify(objetosCarrito));
  const objetosNuevosCarrito = JSON.parse(localStorage.getItem('item'));
  mostrarProductos(objetosNuevosCarrito);
};
