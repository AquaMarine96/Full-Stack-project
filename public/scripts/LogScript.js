let studButton = document.querySelector("#user");
let staffButton = document.querySelector("#admin");

studButton.addEventListener("click", ()=> {
    document.querySelector(".secondary-buttons").style.display = "block";
    document.querySelector(".primary-buttons").style.display = "none";
})
staffButton.addEventListener("click", ()=> {
    document.querySelector(".login-form").style.display = "block";
    document.querySelector(".primary-buttons").style.display = "none";
})

let signUpButton = document.querySelector("#sign-up");
let logInButton = document.querySelector("#log-in");

signUpButton.addEventListener("click", ()=> {
    document.querySelector(".signup-form").style.display = "block";
    document.querySelector(".secondary-buttons").style.display = "none";
})

logInButton.addEventListener("click", ()=> {
    document.querySelector(".login-form").style.display = "block";
    document.querySelector(".secondary-buttons").style.display = "none";
})

let logSubmit = document.querySelector("#log-submit");
let signSubmit = document.querySelector("#sign-submit");

logSubmit.addEventListener("click", ()=> {
    window.route.href = "http://localhost:3000/index.hbs"
});

signSubmit.addEventListener("click", ()=> {
    window.route.href = "http://localhost:3000/index.hbs"
});