let cart=document.querySelector("#abrirCarrito")
let abierto=document.getElementById("cart-icon");
let cerrado= document.getElementById("cerrarCarrito");

let borrarTennis=document.getElementById("cart-remove")

const abrirCart = () => {
  cart.classList.add("open");
  //console.log("ya!")
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

const borrarCarrito=()=>{

}
