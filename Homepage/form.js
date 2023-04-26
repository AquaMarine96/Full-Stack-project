
        let signup = document.querySelector(".signup-form");
        let sign = document.querySelector(".sign");
        sign.addEventListener("click", ()=> {
            signup.style.display = "block";
        })
        sign.onclick = function() {
            document.querySelector("body").style.backgroundColor = "rgba(0, 0, 0, 0.9)";
            console.log("clicked")
        }

        let login = document.querySelector(".login-form");
        let log = document.querySelector(".log");
        log.addEventListener("click", ()=> {
            login.style.display = "block";
        })
        log.onclick = function() {
            document.querySelector("body").style.backgroundColor = "rgba(0, 0, 0, 0.9)";
            console.log("clicked")
        }
    