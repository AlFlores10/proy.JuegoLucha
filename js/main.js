
//Declaracion de variables del juego

let arrayPersonajes = [];


//Declaro las funciones

const botonMostrar = () => {
    selectorPlayer.style.display = "";
}
const botonOcultar = () => {
    selectorPlayer.style.display = "none";
}



// const botonClick = (arg1) => {
    
//     console.log("Me has clickado y me has pasado el numero :", arg1, " como argumento.");
// }

const selectorPersonaje = (personaje) => {
    
    if(arrayPersonajes.length < 2){
        
        arrayPersonajes.push(personaje);

        if(arrayPersonajes.length == 2){
            selectorPlayer2.innerHTML = `${personaje.imagen} </br>-- PJ 2 -- </br> ${personaje.nombre} </br></br> Vida: ${personaje.vida} </br>
        Ataque: ${personaje.ataque} </br> Defensa: ${personaje.defensa}`;

            console.log("Ya has escogido los 2 personajes",arrayPersonajes);

            selector.style.display = "none";
        
            return;
        }
        console.log(arrayPersonajes);
        console.log(arrayPersonajes.length);
        selectorPlayer1.innerHTML = `${personaje.imagen} </br>-- PJ 1 -- </br> ${personaje.nombre} </br></br> Vida: ${personaje.vida} </br>
        Ataque: ${personaje.ataque} </br> Defensa: ${personaje.defensa}`;


       
    } 
}

//Ejecución del código

// divTexto.innerHTML = "Imagen Azul";
// divTexto.style.color = "blue";
