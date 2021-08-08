// let student = {
//     name: 'Bryce',
//     age: 25,
//     city: 'Salt Lake City'
// };

// for (let key in student) {
//     console.log(key + " => " + student[key]);
// }


let user = {
    username: 'Bryce',
    email: 'brycepearson09@gmail.com',
    phone: '801-222-2222'
  };
  
  for (var key in user) { // Key is an iterator variable
      console.log(key + " - " + user[key]);
  }