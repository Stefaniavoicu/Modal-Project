const openSignupBtn = document.querySelector("#openSignupBtn");
const signupContainer = document.querySelector("#signupModalContainer");
const closeBtn = document.querySelector("#closeBtn");
const firstName = document.querySelector("#modalFirstName");
const secondName = document.querySelector("#modalSecondName");
const email = document.querySelector("#modalSignupEmail");
const password = document.querySelector("#modalSignupPassword");
const signupBtn = document.querySelector("#signupBtn");

const usersData = JSON.parse(localStorage.getItem('users')) || [];

openSignupBtn.addEventListener ('click', () =>{
    signupContainer.classList.toggle('show');
});

closeBtn.addEventListener( 'click', () =>{
    signupContainer.classList.toggle('show');
});

window.addEventListener('click', function(event) {
    if(event.target === signupContainer){
        signupContainer.classList.toggle('show');
    }
})

signupBtn.addEventListener('click', () =>{
    const userData = {
        fistName: firstName.value,
        secondName: secondName.value,
        email: email.value,
        password: password.value,
    };

    signupContainer.classList.toggle('show');

    usersData.push(userData);

    localStorage.setItem("users", JSON.stringify(usersData));

    firstName.value = "";
    secondName.value = "";
    email.value = "";
    password.value = "";
});


