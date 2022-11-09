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
  //console.log("ya!")
  pago.classList.remove('pagoclick');
  // aqui estoy agarrando todos los datos del local storage le pongo item porque asi le denomine abajo y hago parse para que queden bien los datos
  // solo los llama cuando se abre el carrito
  const objetosCarrito = JSON.parse(localStorage.getItem('item'));
  console.log(objetosCarrito);
};
abierto.addEventListener('click', abrirCart);

const cerrarCarrito = () => {
  cart.classList.remove('open');
  //console.log("no")
};

cerrado.addEventListener('click', cerrarCarrito);

const añadirCarrito = (title, price, img) => {
  // cree un objeto para que se vea todo mas bonito y para posterirormente hacer el display mas facilmente dentro del carrito
  const guardarItemEnCarrito = { title: title, price: price, img: img };
  // arriba defini un array vacio aqui simplemente con cada click añado al array 
  arrayObjetosGuardados.push(guardarItemEnCarrito);
  // aca le denomino el item al local storage y lo llame item, de segundo esta el valor de los objetos guardados
  // cuando uno guarda los datos debe usar stringify para que quede bien luego hace parse
  localStorage.setItem('item', JSON.stringify(arrayObjetosGuardados));
};

/* pasos a seguir:
 - con los datos agarrados del local storage hacer el display de estos en el carrito
 - seria bacano ponerles una x y hacer una funcion que los elimine del array, puede ser con onclick es facil y se elimina y reemplaza en el
  display.*/
