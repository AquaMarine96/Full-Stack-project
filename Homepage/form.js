
//for the sign in button

let signup = document.querySelector(".signup-form");
let sign = document.querySelector("#sign-button");


sign.addEventListener("click", ()=> {
    signup.style.display = "block";
    const elements = document.querySelector(".wrapper div")
    elements.style.opacity = 0;
    console.log("clicked")
})

//for the login button


let login = document.querySelector(".login-form");
let log = document.querySelector("#log-button");

log.addEventListener("click", ()=> {
    login.style.display = "block";
    const elements = document.querySelector(".wrapper div")
    elements.forEach (element => element.style.opacity = 0);
    //elements.style.opacity = 0;
    console.log("clicked")
})




//Account validation

let email = document.querySelector("#email")
let password = document.querySelector("#password")
let password2 = document.querySelector("#password2")

function blanks(){
    if (email.value.length == 0 || password.value.length == 0 || password2.value.length == 0 || phone.value.length == 0){
        //alert("Παρακαλώ συπληρώστε όλα τα πεδία")
        console.log("user didnt fill in all the fields")
    };
};

function emailVerify(){
               
    if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email.value)){
        return true;
    }
    else{
        console.log("email is not valid")
        return false;

    }
              
};

function passwordVerify(){
                
    if (/^[a-zA-Z]+\d+[!@#$%^&*]$/.test(password.value)  && password.value.length >= 8){                    
    return true;  
    }
    else{               
                        
    console.log("password is not valid")
    //alert("password needs to have at least one uppercase letter, one number, a single special character and be at least 8 characters long");
    return false;
    }
};


function passCheck(){
                               
    if(password2.value === password.value){
        return true;   
    }
    else{
        alert("Passwords do not match")
        console.log("passwords do not match")
        return false;
};
}


function isEmail(email) {
    blanks();
    emailVerify();
    passwordVerify();
    passCheck();
    if(emailVerify() && passwordVerify() && passCheck()){
        alert("Επιτυχής εγγραφή")
        
        let tagUser = document.querySelector("#user-tag")
        let signUsername = document.querySelector("#sign-username")
        tagUser.innerHTML = "Welcome, " + signUsername.value;
        tagUser.style.display = "block";
    console.log("user entered")
    }
    else{
        console.log("not succesfull")
    };
    //go to the main page again

};

//Login validation

function loggedIn(){
    let tagUser = document.querySelector("#user-tag")
    let logUsername = document.querySelector("#log-username")
    tagUser.innerHTML = "Welcome, " + logUsername.value;
    tagUser.style.display = "block";
}


//Submit button for the sign in and log form

let submitSign= document.querySelector("#sign-submit");
let submitLog = document.querySelector("#log-submit");

submitSign.addEventListener("click", isEmail())
submitLog.addEventListener("click", loggedIn())



    