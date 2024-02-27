//console.log ("hola mundo soy jesus")

//var variableA= "jesus davila"
//console.log( "El nombre de el es:" + variableA );

//let nombre = " JESUS DAVILA "

//Reasignando los valores de las variables usando prompt()
// prompt(): es una funcion que nos permite introducir datos por teclado.
//nombre = prompt("Ingresa tu nombre");
//saldo = prompt("Ingresa el saldo que deseas");

// Mostramos los datos introducidos por el usuario que se almacenan en las variables ya existentes (reasignacion)
// console.log("Bienvenido " + nombre + " tu saldo es: " + saldo + "$");
//alert("Bienvenido " + nombre + " tu saldo es: " + saldo + "$");



// Raealizamos una calculadora utilizando variables de tipo let y prompt() para introducir datos por teclado.
// adicionalmente mostramos el resultado en consola.

//let num1 = +prompt("Ingresa un numero");
//let num2 = +prompt("Ingresa otro numero");

//console.log("total: " + (num1 + num2));




//const: al igual que let es te alcance(scope) limitado, no se puede mutar, ni reasignar.
const correo = "jesusdaniel@gmail.com"
console.log(correo)

// Intentamos reasignar la variable de tipo constante "correo"
// correo = "correo@gmail.com"
// console.log(correo)




/* Ejercicio, agregar IVA a un monto */

//let monto = +prompt("Ingresa un monto");
//const IVA = 0.16;
//let montoFinal = monto + (monto * IVA);

//alert("El monto total a pagar es: " + montoFinal);





/* 
    EJERCICIO PARA EL DIA JUEVES 15 DE FEBRERO DE 2024
    Realiza un programa que calcule el IMC de una persona. 
*/

// Utilizando prompt, y variables let y constantes.
// Formula del IMC: peso / (altura * altura)

//let peso = +prompt("Ingrese su peso actual");
//let altura = +prompt("Ingrese su altura actual");
//const IMC = (peso / (altura * altura)).toFixed(2);

//alert ("Su IMC personal es :" + IMC); 


//calculadora basica 

//const numero1 = +prompt ("ingrese el numero ");
//const numero2 = +prompt ("ingrese el numero 2");
//const TOTAL = numero1 + numero2;

//alert ("el total es la suma es:" + TOTAL);
    
    /* 
    + suma
    - resta
    * multiplicacion
    / division
    ** potencia
*/





//
//* ACTIVIDAD - Juego del semaforo.
//Crea un mensaje en pantalla que muestre 3 colores a elegir: 
//    VERDE, AMARILLO, ROJO.
//    Guarda la respuesta en una variable llamada color.
//
//    Ejemplo: Elige un color para iniciar:
//    ) VERDE
//    2) AMARILLO
//    3) ROJO
//    OTRO) Opcion invalida
//
//
//    Luego crea otro mensaje en pantalla que muestre una situacion con el color ingresado previamente
//    y 3 opciones a elegir: Pasar normalmente, Acelerar y Esperar.
//    Guarda la respuesta en una variable llamada accion.
//
//    Ejemplo: 
//        - El semaforo esta de color ROJO, ¿Que desea hacer?
//        ) Pasar normalmente
//        2) Acelerar
//        3) Esperar
//        OTRO) Opcion invalida
//
//
//    Luego crea la logica con Switch-Case que evalue las respuestas ingresadas en el navegador
//    y en base a ello inicie un caso.
//
//
//    Si la luz es VERDE evaluar:
//    - Si el jugador pasa normalmente:
//        mostrar un mensaje que diga: Bien hecho!, pasaste en el momento adecuado ✅, ¡Has ganado! 😁
//    - Sino, Si el jugador acelera:
//        mostrar un mensaje que diga: Oh no!, Aceleraste demasiado y chocaste 💥, ¡Has perdido! 😞
//    - Sino, Si el jugador espera:
//        mostrar un mensaje que diga: Oh no!, Creaste un bloqueo y los demas conductores estan furiosos 🤬, ¡Has Perdido! ❌
//    - De lo contrario
//        mostrar un mensaje que diga: Respuesta invalida.
//    
//    
//    Si la luz es AMARILLO evaluar:
//    - Si el jugador pasa normalmente:
//        mostrar un mensaje que diga: Oh no!, No aceleraste lo suficiente y te han chocado 💥, ¡Has perdido! ❌
//    - Sino, Si el jugador acelera:
//        mostrar un mensaje que diga: Bien hecho!, pasaste en el momento justo ✅, ¡Has ganado! 😁
//    - Sino, Si el jugador espera:
//        mostrar un mensaje que diga: Oh no!, Creaste un bloqueo y los demas conductores estan furiosos 🤬, ¡Has Perdido! 😞
//    - De lo contrario
//        mostrar un mensaje que diga: Respuesta invalida.
//
//
//    Si la luz es ROJO evaluar:
//    - Si el jugador pasa normalmente:
//        mostrar un mensaje que diga: Oh no!, Pasaste en el momento indebido ❌, ¡Has perdido! 😞
//    - Sino, Si el jugador acelera:
//        mostrar un mensaje que diga: Oh no!, Crusaste mientras autos en otra direccion pasaban y chocaste 💥, ¡Has Perdido! ❌
//    - Sino, Si el jugador espera:
//        mostrar un mensaje que diga: Bien hecho!, Esperaste en el momento adecuado ✅, ¡Has ganado! 😁
//    - De lo contrario
//        mostrar un mensaje que diga: Respuesta invalida.
//
//
//    PISTA: en algun momento necesitaras usar if-else y el operador AND/&&
//    PISTA 2: Para los mensajes de retorno puedes usar alert() o console.log()



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
    3) Esperar`);

    if ((accion >=1 ) && (accion <=3)) {
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
        alert ("Respuesta Invalida");
    };
}else {
    alert ("Respuesta Invalida");
};


//Extension  del ejercicio anterior, utilizando el mismo menú mostrar 3 o 4 opciones de cada tipo de producto.
//
//
//
//switch(prompt(`
//Minimarket 🛒\n
//¿Que desea comprar?:
//1) Carne 🥩
//2) Verduras 🥬
//3) Frutas 🍎
//4) Dulces 🧁
//5) Bebidas 🥤
//6) Productos de aseo personal 🧼
//7) Medicamentos 💊
//8) Papeleria ✉️
//9) No veo lo que busco 🤷
//`)){
//    case "1":
//        alert("Has seleccionado Carne 🥩");
//        let opcion = prompt(`Elige el tipo de carne: 
//        1: Cerdo 🐷 
//        2: Pollo 🐔 
//        3: Pescado 🐟 
//        4: Res 🐄`);
//
//        // Manejando la respuesta con if-else
//        if(opcion === "1"){
//            alert("Has seleccionado Cerdo 🐷");
//        }else if( opcion === "2"){
//            alert("Has seleccionado Pollo 🐔");
//        }else if(opcion === "3"){
//            alert("Has seleccionado Pescado 🐟");
//        }else if(opcion === "4"){
//            alert("Has seleccionado Res 🐄");
//        }else{
//            alert("Lo sentimos el tipo de carne que indicas no se encuentra disponible");
//        }
//        break;
//    case "2":
//        alert("Has seleccionado Verduras 🥬");
//
//        // Manejando la respuesta con switch
//        switch(prompt(`
//        Elige el tipo de verdura:
//        1: Lechuga 🥬
//        2: Zanahoria 🥕
//        3: Brocoli 🥦
//        4: Papa 🥔
//        `)){
//            case "1":
//                alert("Has seleccionado Lechuga 🥬");
//                break;
//            case "2":
//                alert("Has seleccionado Zanahoria 🥕");
//                break;
//            case "3":
//                alert("Has seleccionado Brocoli 🥦");
//                break;
//            case "4":
//                alert("Has seleccionado Papa 🥔");
//                break;
//            default:
//                alert("Lo sentimos la verdura que indicas no se encuentra disponible");
//        }
//        break;
//    case "3":
//        alert("Has seleccionado Frutas 🍎");
//        let respuesta = +prompt(`
//        Elige el tipo de fruta:
//        1: Manzana 🍏
//        2: Cereza 🍒
//        3: Pera 🍐
//        4: Piña 🍍
//        `);
//
//        // Manejando la respuesta con Ternario
//        respuesta === 1
//            ? alert("Has seleccionado Manzana 🍏")
//            : respuesta === 2
//                ? alert("Has seleccionado Cereza 🍒")
//                : respuesta === 3
//                    ? alert("Has seleccionado Pera 🍐")
//                    : respuesta === 4
//                        ? ("Has seleccionado Pina 🍍")
//                        : alert("Lo sentimos la fruta que indicas no se encuentra disponible");
//        
//        break;
//    case "4":
//        alert("Has seleccionado Dulces 🧁");
//        let opciones = prompt(`Elige el tipo de dulce que desees: 
//        1: Torta 
//        2: Milhoja
//        3: Donas     
//        4: Galletas`);
//        
//        if (opciones === "1"){ 
//            alert ("Has selecionado torta");
//        }else if(opciones === "2"){
//            alert ("Has selecionado Milhoja");
//        }else if(opciones === "3"){
//            alert("Has seleccionado Donas");
//        }else if(opciones === "4"){
//            alert("Has seleccionado Galletas");
//        }else{
//            alert("Lo sentimos el tipo de dulces que indicas no se encuentra disponible");}
//        break;
//    case "5": 
//        alert("Has seleccionado Bebidas 🥤");
//        switch (prompt (`Elige el tipo de Bebida:
//        1: Agua 💧
//        2: Refrescos 🥤
//        3: Cerveza 🍻
//        4: Vino 🍷`)
//        ){
//            case "1": 
//                alert("Has selecionado Agua 💧");
//                break;
//            case "2":
//                alert("Has selecionado Refrescos 🥤");
//                break;
//            case "3": 
//                alert("Has selecionado Cerveza 🍻");
//                break;
//            case "4": 
//                alert("Has selecionado Vino 🍷");
//                break;
//            default:
//                alert ("Lo sentimos el tipo de bebida no se encuentra disponible");
//        }
//        break;
//    case "6":
//        alert("Has seleccionado Productos de aseo personal 🧼");
//        let productos = +prompt (`Elige tipo de Producto Personal
//        1: Cepillo de dientes
//        2: Shampoo
//        3: jabon
//        4: Desodorante
//        `);
//        productos === 1
//            ? alert("Has seleccionado cepillo de dientes")
//            : productos === 2
//                ? alert("Has seleccionado shampoo")
//                : productos === 3
//                    ? alert("Has seleccionado jabon")
//                    : productos === 4
//                        ? alert ("Has seleccionado Desodorante")
//                        : alert("Lo sentimos el producto de limpieaza que indicas no se encuentra disponible");
//        break;
//    case "7":
//        alert("Has seleccionado Medicamentos 💊");
//        let Medicamentos = prompt(`Elige el tipo de medicamento
//        1: Acetaminofen
//        2: Teragrip
//        3: Diclofenac
//        4: Suero
//        `)
//        if (Medicamentos === '1') {
//            alert ('Has seleccionado Acetaminofen');
//        }else if (Medicamentos === '2'){
//            alert ('Has seleccionado Teragrip')
//        }else if (Medicamentos === '3'){ 
//            alert('Has seleccionado Diclofenac')
//        }else if (Medicamentos === '4') {
//            alert ('Has seleccionado suero')
//        }else {alert ("lo sentimos pero el tipo de medicamentos no esta disponible")}
//        break;
//    case "8":
//        alert("Has seleccionado Papeleria ✉️");
//        switch (prompt (`Elige el tipo de papeleria:
//        1: Lapiz ✏
//        2: Cuaderno 📖
//        3: libro 📗
//        4: Regla 📐
//        `))
//        {
//        case "1":
//            alert("Has seleccionado Lapiz✏");
//            break;
//        case "2":
//            alert("Has seleccionado Cuaderno 📖 ")
//            break;
//        case "3":
//            alert("Has seleccionado libro 📗 ")
//            break;
//        case "4":
//            alert("Has seleccionado Regla 📐");
//            break;
//        default:
//            alert ("los sentimos el tipo de libreria que indicas no esta disponible")
//            break;
//        }
//        break;
//    case "9":
//        alert("Lo sentimos pronto tendremos mas productos 🛒");
//        break;
//    default:
//        alert("Lo sentimos el producto no se encuentra disponible");
//};
//
//