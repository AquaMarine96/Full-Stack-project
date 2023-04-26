
let signup = document.querySelector(".signup-form");
let sign = document.querySelector(".sign");

//for the sign in button
sign.addEventListener("click", ()=> {
    signup.style.display = "block";
})
sign.onclick = function() {
    const elements = document.querySelectorAll("*")
    elements.forEach((element) => {
        if(element.tagName.toLowerCase() !== "form"){
            element.style.opacity = 0.2;
        }   
    });
            
    console.log("clicked")
}


// for the login button


let login = document.querySelector(".login-form");
let log = document.querySelector(".log");
log.addEventListener("click", ()=> {
    login.style.display = "block";
})
        log.onclick = function() {
            const elements = document.querySelectorAll("*")
            elements.forEach((element) => {
                if(element.tagName.toLowerCase() !== "form"){
                    //element.style.opacity = 0.8;
                }   
            });
            
            console.log("clicked")
        }

    