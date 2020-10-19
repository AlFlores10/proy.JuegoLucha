
//Declaracion de variables del juego

let arrayPersonajes = [];
let turno = 1;

//Declaro las funciones

const botonMostrar = () => {
    selectorPlayer.style.display = "";
}
const botonOcultar = () => {
    selectorPlayer.style.display = "none";
}

let golpear = () => {
    let hit = (arrayPersonajes[0].ataque - arrayPersonajes[1].defensa);
    arrayPersonajes[1].vida -= hit; 

    let hit2 = (arrayPersonajes[1].ataque - arrayPersonajes[0].defensa);
    arrayPersonajes[0].vida -= hit2; 

    console.log(`${arrayPersonajes[0].nombre} hace ${hit} de daño`);
    console.log(`${arrayPersonajes[1].nombre} hace ${hit2} de daño`);

    combateLog.innerHTML = (`TURNO: ${turno} </br></br>${arrayPersonajes[0].nombre} hace ${hit} de daño </br> Vida Restante ${arrayPersonajes[1].nombre} = ${arrayPersonajes[1].vida} </br></br>     
    ${arrayPersonajes[1].nombre} hace ${hit2} de daño </br> Vida Restante ${arrayPersonajes[0].nombre} = ${arrayPersonajes[0].vida}`);
    
    console.log(`${arrayPersonajes[0].nombre} Vida: ${arrayPersonajes[0].vida}`);
    console.log(`${arrayPersonajes[1].nombre} Vida: ${arrayPersonajes[1].vida}`);


        if((arrayPersonajes[0].vida > 0) && (arrayPersonajes[1].vida > 0)){
        turno++;
        
    
        }else if(arrayPersonajes[1].vida <= 0) {

        selector.style.display = "none";
        selectorPlayer.style.display = "none";
        combateLog.style.display = "none";
        finalPartida.style.display = "block";
        btnGolpear.style.display = "none";
        alert("JUEGO TERMINADO. J1 WIN");
        }
        else{
            selector.style.display = "none";
            selectorPlayer.style.display = "none";
            combateLog.style.display = "none";
            finalPartida.style.display = "block";
            btnGolpear.style.display = "none"; 
            alert("JUEGO TERMINADO. J2 WIN");
        }
    return;
}



const selectorPersonaje = (personaje) => {
    
    if(arrayPersonajes.length < 2){
        
        arrayPersonajes.push(personaje);

        if(arrayPersonajes.length == 2){
            selectorPlayer2.innerHTML = `${personaje.imagen} </br>-- PJ 2 -- </br> ${personaje.nombre} </br></br> Vida: ${personaje.vida} </br>
        Ataque: ${personaje.ataque} </br> Defensa: ${personaje.defensa}`;

            console.log("Ya has escogido los 2 personajes",arrayPersonajes);

            selector.style.display = "none";
            combateLog.style.display = "block";
            btnGolpear.style.display = "block";
        
            return;
        }
        console.log(arrayPersonajes);
        console.log(arrayPersonajes.length);
        selectorPlayer1.innerHTML = `${personaje.imagen} </br>-- PJ 1 -- </br> ${personaje.nombre} </br></br> Vida: ${personaje.vida} </br>
        Ataque: ${personaje.ataque} </br> Defensa: ${personaje.defensa}`;


       
    } 
}

//Ejecución del código




