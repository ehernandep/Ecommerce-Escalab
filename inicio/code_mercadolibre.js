import {productos} from '../productos/productos.js';
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
        shoes += `<div class="productoss">
                      <div>
                        <img class="rounded" src="${zapato.thumbnail}"> 
                      </div>
                      <div class="title">${zapato.title}</div>
                      <div class="price">Precio: ${zapato.price}</div>
                      <div class="available_quantity">
                        Cantidad Disponible: ${zapato.available_quantity}
                      </div>
                      <div class="cartbutton"><i class="bx bx-shopping-bag carrito" id="carrito"></i></div>
                    </div></div>
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
                      <div class="cartbutton"> <i class="bx bx-shopping-bag carrito" id="carrito"></i></div>
                    </div></div>

                `;
    });
    document.getElementById('shop-content').innerHTML = shoes;
  });
};
console.log(productos)
mostrarProductos();

cargarDatos();
