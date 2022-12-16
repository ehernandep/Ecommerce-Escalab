import { productos } from '../productos/productos.js';
let shoes = '';
const isOk = true;
const cargarDatos = async () => {
  try {
    const respuesta = await fetch(
      'https://api.mercadolibre.com/sites/MLC/search?q=shoes'
    );
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      datos.results.forEach((zapato) => {
        // lo unico que hice fue poner el onclick de una manera diferente a su vez le pase 3 argumentos a la funcion.
        shoes += `<div class="productoss">
                      <div>
                        <img class="rounded" src="${zapato.thumbnail}"> 
                      </div>
                      <div class="title">${zapato.title}</div>
                      <div class="price">Precio: ${zapato.price}</div>
                      <div class="available_quantity">
                        Cantidad Disponible: ${zapato.available_quantity}
                      </div>
                      
                      <button class="btn bx bx-shopping-bag carrito" id="carrito" onclick="añadirCarrito('${zapato.title}','${zapato.price}','${zapato.thumbnail}')"></button>
                   </div>
                  `;
      });
      document.getElementById('shop-content').innerHTML = shoes;
    }
  } catch (err) {
    console.log(err);
  }
};

const customFetch = (time, task) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isOk) {
        resolve(task);
      } else {
        reject('Error');
      }
    }, time);
  });
};

const mostrarProductos = () => {
  customFetch(2000, productos).then((data) => {
    document.getElementById('shop-content');
    data.forEach((zapato) => {
      shoes += `<div class="productoss">
      <div>
                        <img class="rounded" src="${zapato.imagen}"> 
                      </div>
                      <div class="title">${zapato.title}</div>
                      <div class="price">Precio: ${zapato.price}</div>
                      <div class="available_quantity">
                        Cantidad Disponible: ${zapato.stock}
                      </div>
                      <button class="btn bx bx-shopping-bag carrito" id="carrito" onclick="añadirCarrito('${zapato.title}','${zapato.price}','${zapato.imagen}')"></button>
                    </div></div>

                `;
    });
    document.getElementById('shop-content').innerHTML = shoes;
  });
};
mostrarProductos();
cargarDatos();
