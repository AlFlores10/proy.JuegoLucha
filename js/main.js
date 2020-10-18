
//Declaracion de variables del juego

let arrayPersonajes = [];


//Declaro las funciones

const botonClick = (arg1) => {
    
    console.log("Me has clickado y me has pasado el numero :", arg1, " como argumento.");
}

const selectorPersonaje = (personaje) => {
    
    if(arrayPersonajes.length < 2){
        
        arrayPersonajes.push(personaje);

        if(arrayPersonajes.length == 2){
            console.log("Ya has escogido los 2 personajes",arrayPersonajes);
            return;
        }
        console.log(arrayPersonajes);
        console.log(arrayPersonajes.length);
       
    } 
}

//Ejecución del código

