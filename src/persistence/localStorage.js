//===LOCALSTORAGE===

export const handleGetProductLocalStorage =()=>{

    const products = JSON.parse(localStorage.getItem("products"));
    if(products){
        return products;
    }else{
        return[];
    }
};

//guardar en localstorgae

//recibir  producto
export const setInLocalStorage = (productIn)=>{
    if(productIn){
    //traer elementos 
    let productsInLocal= handleGetProductLocalStorage();
     const existingIndex = productsInLocal.findIndex((productsLocal)=>
    productsLocal.id == productIn.id
    )
     //verificar si existe
    if(existingIndex !== -1){
        productsInLocal[existingIndex] = productIn;

    }else{
    //si existe lo reemplaza sino lo agrega
    productsInLocal.push(productIn);
    }
    //setear el nuevo array
    localStorage.setItem("products", JSON.stringify(productsInLocal));
}

}