var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];

var foundElement = arr.indexOf('Correa');

console.log(foundElement);

arr.splice(foundElement, 1);

arr.splice(1, 2);

console.log(arr);



var array = ['Altuve', 'Bregman', 'Correa', 'Springer'];

var foundElement = array.indexOf('Springer');

array.splice(foundElement, 1);