function userInfo(userObj) {
  console.log(userObj);
}

const user = {
  name: {
    userFirstName: "Hitesh",
    userLastName: "Choudhary",
  },
  age: 40,
};

userInfo(user);

// Destructuring in function parameter 👇
function userDetail({ name: { userFirstName } }) {
  console.log(userFirstName);
  console.log(`The username is ${userFirstName}`);
}

userDetail(user);
