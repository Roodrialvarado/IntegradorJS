import { categoriaActiva } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localstorage";
import { handleRenderList } from "../view/store";

//categoria
 const handleFilterProductsByCategory = (categoryIn) =>{
    const products = handleGetProductLocalStorage();

    switch (categoryIn) {
        case categoriaActiva:
            handleRenderList(products);
            break;
        case "Todo":
            handleRenderList(products);
            break;
        case "Hamburguesas":
        case "Papas":
        case "Gaseosas":
            const result= products.filter((el)=>el.categories === categoryIn);
            handleRenderList(result);
        default:
            break;
            case "Mayor precio":
                const resultPrecioMayor = products.sort((a,b)=> b.precio - a.precio)
                handleRenderList(result);
            break;
            case "Menor precio":
                const resultPrecioMenor = products.sort((a,b)=> a.precio - b.precio)
                handleRenderList(result);
            break;
    }
 };





//render de la vista categorias

export const renderCategories = () => {
    //tomamos elementos de la lista
    const ulList = document.getElementById("listFilter");
    //creamos esos elementos dentro de la lista
    ulList.innerHTML = ` 
    <li id="Todo">Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="Mayor precio">Mayor precio</li>
    <li id="Menor precio">Menor precio</li>
    `;
    //añadimos dinamicamento el evento click
    const liElements =ulList.querySelectorAll("li");
    liElements.forEach((liElement)=>{
        liElement.addEventListener(`click`,()=>{
            handleClick(liElement);
        });
    });
    //verificamos y manejamos el estilo del elemento activo
    const handleClick = (elemento)=>{
        handleFilterProductsByCategory(elemento.id);
        liElements.forEach((el)=>{
            if(el.classList.contains(`liActive`)){
                el.classList.remove("liActive");
            }else{
                if(elemento==el){
                    el.classList.add("liActive");
                }
            }
        });
    };
};


