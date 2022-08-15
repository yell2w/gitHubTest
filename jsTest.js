


const developer = {
    firstName: 'Nathan',
    lastName: 'Sebhastian',
    developer: true,
    age: 25,
  }
  
  //destructure developer object
  const { firstName, lastName } = developer;
  
  console.log(firstName); // returns 'Nathan'
  console.log(lastName); // returns 'Sebhastian'
  console.log(developer); // returns the object

  const { firstName:name } = developer;
console.log(name); // returns 'Nathan'