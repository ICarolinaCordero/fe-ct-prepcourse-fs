/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   if (x, y === x, y) {
      return x === y;
   }

   }

function tienenMismaLongitud(str1, str2) {
   if (str1.length == str2.length) {
      return true;
   } else if (str1.length != str2.length) {
      return false;
   }
}
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.


function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   if (num < 90) {
      return true;
   } else (num > 90); {
      return false;
   }
}
menosQueNoventa(75);

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   if (num > 50) {
      return true;
   } else (num < 50); {
      return false;
   }
}

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   if (num % 2 === 0) {
      return true;
   } else {
      return false;
   }
}

function esImpar(num) {
if (num % 2 === 1) {
   return true;
} else {
   return false;
}
}
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
