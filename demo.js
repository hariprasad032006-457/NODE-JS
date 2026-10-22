const { registerUser, checkUser } = require("./registration");

function sayHello() {
  console.log("Hello from the Node.js learning lab!");
}

sayHello();
registerUser();

const isExisting = checkUser();
console.log(isExisting ? "User already exists." : "User does not exist yet.");
