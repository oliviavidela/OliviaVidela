function rectangulo(altura, ancho) {
  return altura * ancho;
}
console.log(rectangulo(10, 5));

function triangulo(base, altura) {
    return (base * altura) / 2;}

console.log(triangulo(10,5));


function dolarHoy(precio_pesos) {
let dolar = 1400;
return precio_pesos / dolar;
}
console.log(dolarHoy(100));

function precioFinal (numero){
return numero + (numero * 0.21)
}
console.log(precioFinal (300))

function mitad (numero){
return numero / 2;
}
console.log(mitad(2))

//SEGUNDA ACTIVIDAD 

let misDatos = {
    nombre: "Olivia",
    apellido: "Videla",
    dni: "47572609",
    comidasFavoritas: ["asado", "sushi", "pizza"],
    edad: "18",
    saludar: function(){
        return("Hola mi nombre es" + this.nombre + this.apellido + "y tengo" + this.edad + "años. Mi primer comida favorita es" + this.comidasFavoritas [0]) }
    
    }
console.log(misDatos.saludar)

let auto = {
    marca: "toyota",
    modelo: "yaris",
    anio: "2023",
    color: "gris",
    posicion: 0,
    
    avanzar: function(numero){
        return this.posicion = this.posicion + numero
    },
    retroceder: function(numero){
        return this.posicion = this.posicion - numero
    
    }
}
auto.avanzar(6)

let nuevoauto = {
    marca: "toyota",
    modelo: "yaris",
    anio: 2023,
    color: "gris",
    posicion: 0,
    moverse: function(numero){
    this.posicion = this.posicion + numero
}
}

let ironMan = {
    nombre: "Iron Man",
    equipo: "Avengers",
    poderes: ["Volar", "Lanzar misiles", "Disparar laser"],
    energia: 100,
    getPoder: function(numero){
        this.energia = this.energia - 10
        return ("Poder Elegido de" + this.nombre + ":" + this.getPoder[numero] + ". Energia restante:" + this.energia),
        this.Poderes[numero] + ". Energia restante: " + this.energia)    
    }
}

let ironMan = {
    nombre: "Hulk",
    equipo: "Avengers",
    poderes: ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder: function(numero){
        this.energia = this.energia - 10
        return ("Poder Elegido de" + this.nombre + ":" + this.getPoder[numero] + ". Energia restante:" + this.energia),
        this.Poderes[numero] + ". Energia restante: " + this.energia)    
    }
}
console.log(ironMan.getPoder(0))
console.log(Hulk.getPoder(0))


for (let i = 0; i < 5; i++) {
  console.log("Practicando con el bucle for");
}

for (let i = 0; i < 10; i++) {
  console.log(`La variable i tiene el valor ${i}`);
}

let ganancias = [3213, -4829, 756, 8970, -3051, -8705, 1601, 2630, 5875, -7301, 3041, 686];

let total = 0; 

for (let i = 0; i < ganancias.length; i++) {
  total = total + ganancias[i]; 
}

console.log(`El total de ganancias es: ${total}`);

let healingIsDifficult = [
  'Fear',
  'Drink to Get Drunk',
  'Taken for Granted',
  'Blow It All Away',
  'Get Me',
  'Im Not Important to You',
  'Sober and Unkissed',
  'Healing Is Difficult',
  'Judge Me',
  'Little Man',
  'Insidiously'
];

for (let i = 0; i < healingIsDifficult.length; i++) {
  console.log(healingIsDifficult[i]);
}

let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
]


for (let i = 0; i < got.length; i++) {
    console.log("soy" + got[i].nombre + got[i].apellido + "de la ciudad" + got[i].ciudad)
}



