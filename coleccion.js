const constructor = ({nombre, nombreRaid, categoria, raza}) => `
  <div> 
    <img alt="" src="imgEnemigos/img${nombre}.webp"> 
    <p><span>Nombre: </span> ${nombre}</p> 
    <p><span>Nombre de la Raid: </span> ${nombreRaid}</p> 
    <p><span>Categoria: </span> ${categoria}</p> 
    <p><span>Raza: </span> ${raza}</p>
  </div>`;
  
const listaEnemigos = () => JSON.parse(localStorage.getItem("enemigos"));


function mostrar(){
    
    const contenedor = document.querySelector("#main")
    contenedor.innerHTML = "" ;
    listaEnemigos()?.forEach(elemento => {

        contenedor.innerHTML += constructor(elemento);
        
    });

} 

mostrar();


