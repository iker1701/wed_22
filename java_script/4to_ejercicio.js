// const arreglo = ["blule", "red" ,"pink", "green", "black"];

// console.log(arreglo);
// console.log[arreglo.length];
// // aceder al primer elemento de mi arreglo

// console.log(arreglo{0});
// console.log(arreglo{1});
// console.log(arreglo{2});
// console.log(arreglo{3});

// console.log(arreglo[arreglo.length -1]);

// var n1 =[1,2,3,4,5]

// console.log(n1);
// console.loh(n1.length)

// // agregar un elemento al final 

// n1.push(6);
// console.log(n1);
// console.log(n1.length)

// // para eliminar al final 

// n1.pop();
// console.log(n1);
// console.log(n1.length)

// // agregar al inicio

// n1.unshift(0);
// console.log(n1);
// console.log(n1.length)

// // eliminal al inicio

// n1.shift();
// console.log(n1);
// console.log(n1.length)

// iteramos un arreglo

// for (let i = 0; i <arreglo.length; i ++ ){
// 	console.log(arreglo[i]);
// }


// for (let i=0; i < n1.length; i ++ ){
// 	console.log(n1[i]);
// }

// var nuevoarray =[];
// console.log(nuevoarray);
// console.log(nuevoarray.length);

// for(let i = 0;i <= 10; i++){
// 	nuevoarray.push(i);
// }

// console.log(nuevoarray);

// var n2doble =[]
// var n2 =[10,405,24]

// console.log(n2[0]);

// n2doble[0] = n2[0] *2;

// n2doble[1] = n2[1] *2;

// n2doble[2] = n2[2] *2;

// console.log(n2doble);

// var a = [10, 405,24]
// var nelementos = a.length;
// var sumaelementos=0
// let promedio;


// console.log(nelementos)

// for(let i =0; i < nelementos; i++){
// 	sumaelementos = sumaelementos + a[i];
// }
// console.log(sumaelementos)

// promedio = sumaelementos / nelementos

// console.log(promedio);


// var gandalf =[10, 11 ,13 ,30, 22, 11 ,10, 33, 22, 22]
// var saruman = [23, 66, 12, 43, 12, 10, 44, 23, 12, 17]
// // var gandalf.length
// // var saruman.length
// var victorias_gan=0
// var victorias_sar=0
// console.log(gandalf.length, saruman.length);

var gandalf =[10, 11 ,13 ,30, 22, 11 ,10, 33, 22, 22]
var saruman = [23, 66, 12, 43, 12, 10, 44, 23, 12, 17]

var ggana=0
var sgana=0
var empate=0


for (let i =0; i <gandalf.length; i++){
	if (gandalf[i] > saruman[i]){
		ggana = ggana+1
	} else if (gandalf[i] < saruman[i]){
		sgana = sgana+1}
	else{
		empate  = empate +1}
}
console.log(ggana,sgana,empate);


