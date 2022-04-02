//creamos la lista vacia.
const colombia=[];

//creamos las personas y las agregaos al array
// utilizando el metodo push().
colombia.push({
    name:"Diego",
    salary:2000

});

colombia.push({
    name:"Andres",
    salary:2000

});

colombia.push({
    name:"Mario",
    salary:1800

});

colombia.push({
    name:"Fernando",
    salary:1500

});

colombia.push({
    name:"Ivan",
    salary:1750

});


//creamos una fucnion que me va permitir entre los elementos de la lsta.
// se me retornará el valor salary de cada unos de los objetos dentro del 
//array que entre como parametro

const salariosCol=colombia.map(
    function (person) {
        return person.salary;
    }

);

//creamos una funcion que me vaa retornar el residuo de dos salarios
const salariosColSorted= salariosCol.sort(function(salaryA,salaryB){
    return salaryA-salaryB;
});

//una funcion qeu me retornara true/flase si el numero es par o impar
function esPar(numerito){
    return (numerito%2 === 0);
}

function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2);
    if(esPar(lista.length))//la funcion le retornara flase o trueaal if y eso condicionara el flujo de trabajo
    {
        const personaMitad1=lista [mitad-1];
        const personaMitad2=lista [mitad];
    }else{ 
        const personaMitad=lista [mitad];
        return personaMitad
    }
}