import { setInLocalStorage } from "./src/persistence/localstorage";
import { renderCategories } from "./src/services/categories";
import { handleSearchProductByName } from "./src/services/searchBar";
import { openModal } from "./src/view/modal";
import { handleGetProductsToStore } from "./src/view/store";
import "./style.css";

//===APLICACION===
export let categoriaActiva = null;

export const setCategoriaActiva = (categoriaIn) =>{
  categoriaActiva = categoriaIn;
};


export let productoActivo = null;
export const setproductoActivo = (productoIn) => {
  productoActivo = productoIn;
};

handleGetProductsToStore();
renderCategories();
//header
const buttonAdd = document.getElementById ("buttonAddElement");
buttonAdd.addEventListener('click',()=>{
  openModal();
});

//button search
const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener("click",()=>{
  handleSearchProductByName();
})


