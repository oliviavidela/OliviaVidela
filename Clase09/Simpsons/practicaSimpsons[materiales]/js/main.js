// completar las variables para que el programa funcione

window.addEventListener('load', function () {

    //capturar HTML 
    //Act1
    let titulo = this.document.querySelector("#titulo");
    titulo.addEventListener("mouseover", function () {
        let nombre = prompt("como te llamas?")
    //Act2
        let saludo = document.querySelector("#saludo");
        if (nombre === "" || nombre === null) {
            saludo.innerText = "BIENVENID@";
        } else {
            saludo.innerText = "BIENVENID@ " + nombre;
        }
    //Act3
        saludo.style.textTransform = "uppercase";
    //Act4
        titulo.style.display = "none";

         let span = document.querySelector("span")
         span.style.display = "inline"
    
    //Act5
    let bienvenida = document.querySelector(".bienvenida")
    let personajes = document.querySelector(".personajes")

    span.addEventListener("click", function() {
        bienvenida.style.display = "none";
        personajes.style.display = "block";
    });
    //Act6
let bart = document.querySelector(#bart);  
let lisa = document.querySelector(#lisa);  
let homero = document.querySelector(#homero);  
let Marge = document.querySelector(#marge);  
let Maggie = document.querySelector(#maggie);  
let Milhouse = document.querySelector(#milhouse);  
let SrBurns = document.querySelector(#burns);  
let Bob = document.querySelector(#bobPatinio);  
let Ned = document.querySelector(#flanders);  
let Buffman = document.querySelector(#duffman);  
let Jefe = document.querySelector(#gorgory);  
let Nelson = document.querySelector(#nelson);  




})
    /* Capturar pesonajes + Asignarles a cada uno su evento correspondiente, 
    así como también su funcionalidad */


    /* Asignarle evento a la variable boton */
    //   let boton = ;


}) 