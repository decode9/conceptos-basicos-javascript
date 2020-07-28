class Animal{
    constructor(patas){
        this.patas = patas;
    }

    static type(){
        console.log("Tipo de Animal");
    }

}

var animal = new Animal(4);

console.log(animal.patas);
Animal.type();

class Perro extends Animal{
    
    constructor(nombre, raza){
        super(4);
        this.nombre = nombre;
        this.raza = raza;
    }

    ladrido(){
        console.log("BARK!")
    }

    type(){
        console.log('Soy un perro')
    }
}

var perro = new Perro('Firulais', 'Pastor Aleman');

console.log(perro.patas)
console.log(perro.nombre)
console.log(perro.raza)
perro.ladrido();
perro.type()