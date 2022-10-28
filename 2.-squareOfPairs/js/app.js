// 3 variables llamadas igual para hacer 3 pruebas (usa una variable y las otras 2 comentalas)

                                // ES5

// declara las variables ES5
/*
// var array = [2, 4, 6];
var array = [-3, 2, -8, 12, 5];
// var array = [1, 2, 3, 4, 5];


// declaración de la funcion 

function square () {
  // escribe tu código aqui...
    var novaarray = [];
    for(var i = 0;i < array.length; i++){
        if(array[i] % 2 == 0){
            novaarray.push(array[i] * array[i]);
        }
        else{
            novaarray.push(array[i]);
        }
    }
    console.log(novaarray);
}

square(array);

*/
                      //  ES6

// Ahora comenta todo el codigo de arriba y escribelo en ES6


// declara variables (let-const)
const array = [-3, 2, -8, 12, 5];

// declara la funcion y ejecuta el código

const square =  (array) => {
    // escribe tu código aqui...
      const novaarray = [];
      for(let i = 0;i < array.length; i++){
          if(array[i] % 2 == 0){
              novaarray.push(array[i] * array[i]);
          }
          else{
              novaarray.push(array[i]);
          }
      }
      console.log(novaarray);
  }


// ejecuta la funcion 

square(array);