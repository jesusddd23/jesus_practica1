Algoritmo CALCULADORA
	Definir numero1, numero2 Como Entero
	Definir respuesta Como Cadena
	respuesta = 'si'
	respuesta = 'Si'
	Mientras respuesta = "si, Si" Hacer
		Escribir 'Hola, ingrese un numero:'
		Leer numero1
		Escribir 'Ahora ingresa otro numero:'
		Leer numero2
		Escribir 'El total de la suma es:', numero1+numero2
		Si numero1+numero2 > 500 Entonces
			Escribir 'el numero es mayor a 500'
		SiNo
			Si numero1+numero2 = 500 Entonces
				Escribir 'el numero es exactamente 500'
			SiNo
				Escribir 'el numero es menor a 500'
			FinSi
		FinSi
		Escribir 'Deseas realizar otra operacion?'
		Escribir "si - no"
		Leer respuesta
	FinMientras
	Escribir 'Gracias por usar esta Calculadora'
FinAlgoritmo
