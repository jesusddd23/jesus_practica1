


let color = prompt(
    `Estas en un semaforo
    elige un color para iniciar:
    1: Verde 🟩
    2: Amarillo 🟨
    3: Rojo 🟥`).toLowerCase();

let accion;

if(color === "Verde" || color === "Amarillo" || color === "Rojo"){ 
    accion = +prompt(`El semaforo esta de color ${color}, ¿Que desea hacer?
    1) Pasar normalmente
    2) Acelerar
    3) Esperar
    `);

    if ((accion >=1 ) && (accion <=3)){
        alert ("evaluando resultados");
        switch (color) {
            case "Verde":
                if (accion === "1") {
                    alert ("Bien hecho!, pasaste en el momento adecuado ✅, ¡Has ganado! 😁");
                }else if (accion === "2") {
                    alert ("Oh no!, Aceleraste demasiado y chocaste 💥, ¡Has perdido! 😞");
                }else {
                    alert ("Oh no!, Creaste un bloqueo y los demas conductores estan furiosos 🤬, ¡Has Perdido! ❌")
                } break;
            case "Amarillo":
                if (accion === "1") {
                    alert ("Oh no!, No aceleraste lo suficiente y te han chocado 💥, ¡Has perdido! ❌")
                }else if (accion === "2") {
                    alert ("Bien hecho!, pasaste en el momento justo ✅, ¡Has ganado! 😁")
                }else {
                    alert ("Oh no!, Creaste un bloqueo y los demas conductores estan furiosos 🤬, ¡Has Perdido! 😞")
                }break;
            case "Rojo":
                if (accion == "1") {
                    alert ("Oh no!, Pasaste en el momento indebido ❌, ¡Has perdido! 😞")
                }else if (accion === "2"){
                    alert ("Oh no!, Crusaste mientras autos en otra direccion pasaban y chocaste 💥, ¡Has Perdido! ❌")
                }else {
                    alert ("Bien hecho!, Esperaste en el momento adecuado ✅, ¡Has ganado! 😁")
                } break;
        }
    }else {
        alert ("Respuesta Invalida")};
}else {
    alert ("Respuesta Invalida");
};