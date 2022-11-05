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
        shoes += `<div class="d-flex col-xs-12 col-sm-6 col-md-4 justify-content-center">
                    <div class="border-0 rounded bg-white mb-3 shadow-sm">
                      <div class="title">${zapato.title}</div>
                      <div class="price">Precio: ${zapato.price}</div>
                      <div class="available_quantity">
                        Cantidad Disponible: ${zapato.available_quantity}
                      </div>
                      <div class="d-flex justify-content-center">
                        <img class="rounded" src="${zapato.thumbnail}" style="width:75%"> 
                      </div>
                    </div>
                  </div>`;
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
      shoes += `<div class="d-flex col-xs-12 col-sm-6 col-md-4 justify-content-center">
                    <div class="border-0 rounded bg-white mb-3 shadow-sm">
                      <div class="title">${zapato.title}</div>
                      <div class="price">Precio: ${zapato.price}</div>
                      <div class="available_quantity">
                        Cantidad Disponible: ${zapato.stock}
                      </div>
                      <div class="d-flex justify-content-center">
                        <img class="rounded" src="${zapato.imagen}" style="width:75%"> 
                      </div>
                    </div>
                  </div>`;
    });
    document.getElementById('shop-content').innerHTML = shoes;
  });
};

mostrarProductos();

cargarDatos();
