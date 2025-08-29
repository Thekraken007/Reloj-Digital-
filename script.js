const date=document.getElementById("date")
const hour=document.getElementById("hour")
const minutes=document.getElementById("minutes")
const seconds=document.getElementById("seconds")

function reloj(){

let diasDeLaSemana=
["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes","Sábado"];
let mesesDelAño=
["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let ahora=new Date();
console.log(ahora);

date.textContent=`${diasDeLaSemana[ahora.getDay()]} ${ahora.getDate()} de ${mesesDelAño[ahora.getMonth()]} del ${ahora.getFullYear()}`
hour.textContent=`${ahora.getHours() < 10 ? "0"+ahora.getHours() : ahora.getHours()}`
minutes.textContent=`${ahora.getMinutes() < 10 ? "0"+ahora.getMinutes() : ahora.getMinutes()}`
seconds.textContent=`${ahora.getSeconds() < 10 ? "0"+ahora.getSeconds() : ahora.getSeconds()}`
}

let interval = setInterval(reloj, 1000);

const botonLadoLuminoso=document.getElementById("ladoLuminoso")
const botonLadoOscuro=document.getElementById("ladoOscuro")
const elegirLado = document.getElementById("elegirLado"); 

botonLadoLuminoso.addEventListener("click", () => {
    document.body.classList.toggle("luminoso");
    elegirLado.style.display = "none"; 
});

botonLadoOscuro.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");
    elegirLado.style.display = "none";
});



