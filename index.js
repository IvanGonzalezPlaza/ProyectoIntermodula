async function cargarEnemigos(){

    let datos = await fetch('Enemigos.json');
    let datosJSON = await datos.json();
    localStorage.setItem("enemigos", JSON.stringify(datosJSON));


}

cargarEnemigos();