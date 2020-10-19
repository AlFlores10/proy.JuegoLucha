
// CLASE LUCHADORES /////////////////////////////////
class Luchadores {
    constructor(nombre, ataque, defensa, imagen, vida){
        this.nombre = nombre,
        this.ataque = ataque,
        this.defensa = defensa,
        this.imagen = imagen,
        this.vida = vida
    }

}

// CONSTANTES LUCHADORES /////////////////////////////
const Luchador1 = new Luchadores('Ryu', 50, 10, '<img src="./img/Ryu.png" alt="">', 100);
const Luchador2 = new Luchadores('Ken', 30, 20, '<img src="./img/Ken.png" alt="">', 100);
const Luchador3 = new Luchadores('Honda', 35, 15, '<img src="./img/Honda.png" alt="">', 100);
const Luchador4 = new Luchadores('Blanka', 35, 15, '<img src="./img/Blanka.png" alt="">', 100);

// SISTEMA DE COMBATE ////////////////////////////////

