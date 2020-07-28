var string = 'Hola mundo';
var number = 25;
var bolean = true; //false
var nulleable = null;
var undefineded;
var array = [1, 8, true, 4];

var date = new Date();

var obj = {
	name: 'Jorge',
	lastname: 'Bastidas',
};

var suma = 1 + 2;
var resta = 1 - 3;
var multiplicacion = 3 * 4;
var dividir = 3 / 4;
var resto = 2 % 2;

/* //TIPO DE DATOS
console.log(typeof string);
console.log(string);
console.log(typeof number);
console.log(number);
console.log(typeof bolean);
console.log(bolean);
console.log(typeof nulleable);
console.log(nulleable);
console.log(typeof undefineded);
console.log(undefineded);
console.log(typeof array);
console.log(array);
console.log(array[2]);
console.log(array[1][1]);
console.log(date);

function sumaDeDosNumeros(number1 = 0, number2 = 5) {
	suma = number1 + number2;

	return suma;
}

var variable = sumaDeDosNumeros(10, 20);

const fun = (number1, number2) => {
	suma = number1 + number;

	return suma;
};
const sleep = (ms) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

const asincrono = async () => {
	console.log('entra funcion');
	await sleep(3000);
	console.log('3 segundos depues');
};

const restaDeDosNumeros = () => {
	console.log('anomina');
};

restaDeDosNumeros();

asincrono();

console.log(fun(15, 30));

console.log(variable); */

var multipleH3 = document.getElementsByClassName('headerH');
var multipleH4 = document.getElementsByClassName('header4');

multipleH3[1].textContent = 'Me han modificado Tio!';

var lonely = document.getElementById('lonely');

lonely.textContent = 'Me he quedado solo!';
/* console.log(multipleH3);
console.log(multipleH4);

console.log(array);
var newArray = array.map((value) => {
	return value + 5;
});

console.log(
	array.reduce((acc, value) => {
		return acc + value;
	})
); */

const validador = (numero) => {
	numero % 2 === 0
		? (lonely.textContent = 'El numero es Par')
		: (lonely.textContent = 'el numero es Impar');
};

const iteraction = (numero) => {
	/* for (let index = 0; index <= numero; index++) {
		var h3 = document.createElement('h3');

        h3.textContent = 'SOY EL VALOR ' + index;
        
		document.body.appendChild(h3);
    } */

	/* for (value of array) {
		var h3 = document.createElement('h3');
		h3.textContent = 'EL VALOR ES ' + value;

		document.body.appendChild(h3);
    } */

    console.log('ARRAY')
	array.forEach((value) => {
		var h3 = document.createElement('h3');

		h3.textContent = 'SOY LA POSICION DE EL VALOR ' + value;

		document.body.appendChild(h3);
	});
};

const selection = (valor) => {
    console.log('SELECCION')

    var h3 = document.createElement('h3');
		
	switch (valor) {
		case 'python':
            h3.textContent = 'Python es perfecto para calculo';
            break;
        case "react":
            h3.textContent = 'React es lo mejor para front y SPA';
            break;
        case 'C#':
            h3.textContent = 'C# Es muy bueno en videojuegos con unity y Unreal';
            break;

		default:
            h3.textContent = "La programacion es el futuro del mundo";
			break;
    }
    document.body.appendChild(h3);
};

const loop = (numero) => {

    while (numero < 100) {
        console.log('WHILENORMAL')
        numero++
        console.log(numero);
    }

    do {
        console.log('DOWHILE')
        numero++
        console.log(numero);
    } while (numero < 100);
}

/* loop(10);

validador(10);

iteraction(5);

selection('algodon');
 */
//console.log(array.slice(2, 4));
//console.log(newArray);
