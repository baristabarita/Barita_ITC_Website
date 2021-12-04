const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Shane" && password === "itcwebproj") {
        alert("You have successfully logged in.");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

function addFeedback(){
    alert("Feedback successfully submitted");
    // var newFeedback = document.getElementById("title-field").value;
    // var newItem = document.createElement("LI");
    // newItem.innerHTML = newFeedback;
    // newItem.classList.add('collection-item'); 
  
    // document.querySelector(".collection").appendChild(newItem); 
    
  }