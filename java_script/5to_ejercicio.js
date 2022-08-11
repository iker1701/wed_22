
// var a =[0,1,2,3,4];
// var b =[5,6,7,8,9];
// var c = [10,11,12,13];

// var listaConcatenada = a .concat(b).concat(c);
// console.log(listaConcatenada);


// // quiero saber si el 19 esta mi lista 

// console.log(listaConcatenada .indexof(19));
// // -1 por que por que no se encruenta en la lista 

// console.log(listaConcatenada .indexof(11));

// var d = ["luna","sol","playa","arena"];


// console.log(d.indexof("sol"));
// console.log(d.indexof("palayas"));

// console.log(listaConcatenada [
// 	listaConcatenada .lengh -1]);


// objetos

// const objecto ={
// 	key1:"value1",
// 	key3:"value2",
// 	key3:"value3"
// }


// const alumno={
// 	nombre:"iker",
// 	edad:"100",
// 	email:"ikerrivas65@gmail.com"
// }

// // console.log(`alumno.email:${alumno.email}`);
// // console.log(alumno);

// // // cambiar el valor de un keydel objecto

// // alumno.edad=33;

// // console.log(alumno);

// // // acceder a todos los valores de un objecto

// // console.log(Object.values(alumno));

// // // si quieres ver si un key se encuentra dentro del object 

// // console.log ("escuela" in alumno);
// // console.log(`email alumno`);

// // // como convertir un objecto en arreglo

// let arregloObjecto = Object.entries(alumno);
// console.log(alumno)
// console.log(arregloObjecto)

// // // como eccedemos a los elemnetos de una lista aninadada

// // console.log(arregloObjecto[0][1]);
// // console.log(arregloObjecto[2][0]); 
// // // ecceder a email // 

// var lista = [
// 	[0,1,10,4,9,45],
// 	["valeria","mariana","paola"],
// 	[56778,19384,13834834,1848484],
// 	["iker","abraham","iñaki"],
// 	[[0],[1],[1,2,124]]
// ]
// console.log(lista);

// console.log(lista [2][2]);
// console.log(lista [3][0]);
// console.log(lista [3][2]);
// // console.log(lista.length-1);
// console.log(lista[lista.length -1][2][2] );

// // pasar de lista  de listas a objectos

// var object = Object.fromEntries(arregloObjecto);

// console.log(object);

var armas =['pistolas','escopeta','granada']

var cargadores = {
	"pistola" : [10,10],
	"escopeta":[2,2,2,2,2],
	"granada":[2,2,2,2],
	"mp7":[1,12,24]
}

var municiones = cargadores["pistola"].concat(cargadores["escopeta"])
var zombies = 0 

for (var i = 0; i < municiones.length; i++) {
	zombies=zombies + municiones[i]
} 
console.log(zombies)