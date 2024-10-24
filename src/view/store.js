//====STORE===

import { setproductoActivo } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localstorage";
import { openModal } from "./modal";


// Función que se encarga de traer elementos y llamar al render
export const handleGetProductsToStore = () => {
    const products = handleGetProductLocalStorage();
    handleRenderList(products);
};

// Se encarga de filtrar y de renderizar la sección con todos sus respectivos elementos
export const handleRenderList = (productosIn) => {
    // Filtrado de arrays por categoría
    const burgers = productosIn.filter((el) => el.categories === "Hamburguesas");
    const papas = productosIn.filter((el) => el.categories === "Papas");
    const gaseosas = productosIn.filter((el) => el.categories === "Gaseosas");

    // Renderiza los elementos de la sección
    const renderProductGroup = (productos, title) => {
        if (productos.length > 0) {
            const productosHTML = productos.map((producto, index) => {
                return `<div class='containerTargetItem' id='product-${producto.categories}-${index}'>
                    <div>
                        <img src='${producto.imagen}'/>
                        <div>
                            <h2>${producto.nombre}</h2>
                        </div>
                        <div class='targetProps'>
                            <p><b>Precio:</b> $ ${producto.precio}</p>
                        </div>
                    </div>
                </div>`;
            });
            // Retorna la sección con todos los elementos dentro
            return `
                <section class='sectionStore'>
                    <div class='containerTitleSection'> 
                    <h3>${title}</h3> 
                    </div>
                    <div class='containerProductStore'>
                        ${productosHTML.join("")}
                    </div>
                </section>
            `;
        } else {
            return "";
        }
    };

    // Renderizar cada uno de los productos dentro de su categoría
    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML = `
        ${renderProductGroup(burgers, "Hamburguesas")}
        ${renderProductGroup(papas, "Papas")}
        ${renderProductGroup(gaseosas, "Gaseosas")}
    `;

    // Añaden los eventos de manera dinámica
    const addEvents = (productsIn) => {
        if (productsIn) {
            productsIn.forEach((element, index) => {
                const productContainer = document.getElementById(
                    `product-${element.categories}-${index}`
                );
                productContainer.addEventListener("click", () => {
                    setproductoActivo(element);
                    openModal();
                });
            });
        }
    };
    addEvents(burgers);
    addEvents(papas);
    addEvents(gaseosas);
};