function sumarN(){
	const ingreso=document.getElementById('promedio').value;
	const vectorUno=ingreso.split(',').map(num => parseFloat(num.trim()));
	let i = 0, suma = 0, prom = 0;
	for (i = 0; i < vectorUno.length; i++){
		suma = suma + vectorUno[i];
	}
	prom = suma / vectorUno.length;
	document.getElementById('salidaP').innerText=`La suma es: ${suma}, el promedio es: ${prom}`;
}

function ingresarN(){
	let suma = 0, numero = 1;
	while (numero >= 0){
		numero = parseInt(prompt("Ingrese un numero (si es negativo se saldrá)."));
		if (numero < 0 ){
			continue
		}
		suma += numero;
	}
	document.getElementById('salidaN').innerText=`La suma de los numeros es: ${suma}`;
}

function validarC(){
	let contraC = "JMC12345", contra, cont = 0;
	do {
		contra = prompt("Ingrese la contraseña")
		cont++;
	} while (contraC != contra);
	document.getElementById('salidaC').innerText=`Contraseña correcta: ${contraC}\nIntentos: ${cont}`;

}
