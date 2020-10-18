
// CLASE LUCHADORES /////////////////////////////////
class Luchadores {
    constructor(nombre, ataque, defensa){
        this.nombre = nombre,
        this.ataque = ataque,
        this.defensa = defensa,
        this.vida = 100
    }
    golpear(){
        let hit = (this.ataque - this.defensa) - this.vida;
        return hit;
    }

}

// CONSTANTES LUCHADORES /////////////////////////////
const Luchador1 = new Luchadores('Ryu', 30, 20);
const Luchador2 = new Luchadores('Ken', 30, 20);
const Luchador3 = new Luchadores('Honda', 30, 20);
const Luchador4 = new Luchadores('Blanka', 30, 20);

console.log(Luchador1);
console.log(Luchador2);

// SISTEMA DE COMBATE ////////////////////////////////

