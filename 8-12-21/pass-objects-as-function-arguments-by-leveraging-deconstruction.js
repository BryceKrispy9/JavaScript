// const user = {
//     name: 'Bryce',
//     email: 'brycepearson09@gmail.com'
// }

// const renderUser = ({ name, email }) => {
//     console.log(`${name}: ${email}`);
// }

// renderUser(user);


const bank = {
    accountNum: 454812259,
    name: 'John Doe',
    balance: 1257
  }
  
  const bankInfo = ({accountNum, name, balance}) => {
    return `Hi ${name}! Your current balance is $${balance}. Account#: ${accountNum}.`
  }
  
  bankInfo(bank);