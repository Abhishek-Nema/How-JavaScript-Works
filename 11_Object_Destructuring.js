// object de-structuring
const person = {
  firstName: "Akshay",
  lastName: "Saini",
  profession: "Youtuber",
};

const { firstName } = person; // "person" i.e. object ka name jahan se refer karenge
console.log(firstName);

const { firstName: fName, lastName: lName } = person; // mai firstName ko fName bolega, lastName ko lName
console.log(fName, lName);

// multi-level de-structuring
const user = {
  name: {
    userFirstName: "Hitesh",
    userLastName: "Choudhary",
  },
  age: 40,
};

// this is normal way, but take extra variable i.e. "name"
const { name } = user;
const { userFirstName: userFname, userLastName: userLname } = name;
console.log(userFname, userLname);

// this is efficient way
const {
  name: { userFirstName: userFName, userLastName: userLName },
} = user;
console.log(userFName, userLName);
