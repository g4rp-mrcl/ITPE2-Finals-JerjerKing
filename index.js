// HTML, Javascript, Bootstrap, CSS, jQuery

/*
let name = "Raniel"; // string || 'Raniel'
let age = 18; // number
let isPogi = true; // boolean
let hobbies = ["Manood ng Netflix", "Maglaro ng video games"]; // object
let user = {
  name: "Raniel",
  age: 18,
  isPogi: true,
  hobbies: ["Manood ng Netflix", "Maglaro ng video games"],
}; // JSON object || JavaScript Object Notation

console.log(user.isPogi, user["isPogi"]);
*/

let btnRegister = document.querySelector("#btnRegister"); // getElementById
// let btnRegister = document.querySelector(".btn-primary"); // getElementByClassName
// let btnRegister = document.querySelector("button div p");
let btnLogin = document.querySelector("#btnLogin"); // getElementById
btnRegister.onclick = () => {
  console.log("btnRegister is clicked.");
  let email = document.querySelector("#txtRegisterEmail").value,
    name = document.querySelector("#txtRegisterName").value,
    password = document.querySelector("#txtRegisterPassword").value,
    confirmPassword = document.querySelector(
      "#txtRegisterConfirmPassword"
    ).value;

  register(email, name, password, confirmPassword);
};

btnLogin.onclick = function () {
  console.log("btnLogin has been clicked.");

  let email = document.querySelector("#txtLoginEmail").value;
  let password = document.querySelector("#txtLoginPassword").value;
  login(email, password);
};

function register(email, name, password, confirmPassword) {
  if (!email) return alert(`Email is required.`);
  else if (!name) return alert(`Name is required`);
  else if (!password || !confirmPassword) return alert(`Password is required.`);
  else if (password != confirmPassword)
    return alert(`Password does not match.`);

  let userToCreate = {
    email,
    name,
    password,
  };

  let users = localStorage.getItem("users");
  if (!users) {
    users = [userToCreate]; // First user na mareregister
  } else {
    users = JSON.parse(users);
    users.push(userToCreate);
  }

  // Success validation
  localStorage.setItem("users", JSON.stringify(users));
  alert(`User ${userToCreate.name} has been successfully created.`); // alert("User " + userToCreate.name + " has been successfully created.");
}

function login(email, password) {
  let users = localStorage.getItem("users");
  if (!users) {
    return alert(`Email or password is invalid.`);
  }

  users = JSON.parse(users);
  let userIndex = users.findIndex((u) => {
    return u.email == email && u.password == password;
  });

  if (userIndex == -1) return alert(`Email or password is invalid.`);

  // Success validation
  window.location.href = 'index.html';
  alert(`Welcome ${users[userIndex].name}.`);
  
}
