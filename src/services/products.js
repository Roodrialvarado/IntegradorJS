import Swal from "sweetalert2";
import { productoActivo } from "../../main";
import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localstorage";
import { closeModal, openModal } from "../view/modal";
import { handleGetProductsToStore, handleRenderList } from "../view/store";

//====PRODUCTOS====

//GUARDAR
 const acceptButton = document.getElementById("acceptButton");
 acceptButton.addEventListener('click',()=>{
  handleSaveOrModifyElements();
 });
 //FUNCION DE GUARDAS
 const handleSaveOrModifyElements = ()=>{
  const nombre = document.getElementById("nombre").value,
  imagen = document.getElementById("img").value,
  precio = document.getElementById("precio").value,
  categories = document.getElementById("categoria").value;

  let object = null;
  if(productoActivo){
    object = {
      ...productoActivo,
      nombre,
      imagen,
      precio,
      categories,
    }
}else{
  object = {
    id: new Date().toISOString(),
    nombre,
    imagen,
    precio,
    categories,
   };

}
Swal.fire({
    title: "Correcto!",
    text: "Producto guardado correctamente!",
    icon: "success"
  });


 setInLocalStorage(object);
 handleGetProductsToStore();
 closeModal();
 };


 //eliminar
  export const handleDeleteProduct = () =>{

Swal.fire({
  title: "Desea eliminar elemento?",
  text: "Si lo eliminas sera permanente",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Si, eliminar!"
}).then((result) => {
  if (result.isConfirmed) {
    const products= handleGetProductLocalStorage();
    const result = products.filter((el)=> el.id !== productoActivo.id);
    localStorage.setItem("products", JSON.stringify(result));
    const newProducts= handleGetProductLocalStorage();
    handleRenderList(newProducts);
    closeModal();
  }else{
    closeModal();
  }
});
  };