let cart=document.querySelector("#abrirCarrito")
let abierto=document.getElementById("cart-icon");
let cerrado= document.getElementById("cerrarCarrito");

let borrarTennis=document.getElementById("cart-remove");

let buyNow=document.querySelector(".btn-buy")
let pago=document.querySelector(".pago")

const comprar=()=>{
  pago.classList.add("pagoclick");
}

const abrirCart = () => {
  cart.classList.add("open");
  //console.log("ya!")
  pago.classList.remove("pagoclick");
};
abierto.addEventListener("click",abrirCart);


const cerrarCarrito = () => {
  cart.classList.remove("open")
  //console.log("no")
};

cerrado.addEventListener("click",cerrarCarrito);

const añadirCarrito = () => {
 /*  for(let i=0; i<) */
  console.log("hola")
};