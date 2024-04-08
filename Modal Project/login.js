const openLoginBtn = document.querySelector("#openLoginBtn");
const loginContainer = document.querySelector("#loginModalContainer");
const closeLoginBtn = document.querySelector("#closeLoginBtn");
const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");
const loginBtn = document.querySelector("#loginBtn");

const userDb = JSON.parse(localStorage.getItem('users'));

openLoginBtn.addEventListener ('click', () =>{
    loginContainer.classList.toggle('show');
});

closeLoginBtn.addEventListener( 'click', () =>{
    loginContainer.classList.toggle('show');
});

window.addEventListener('click', function(event) {
    if(event.target === loginContainer){
        loginContainer.classList.toggle('show');
    }
})

loginBtn.addEventListener('click', () =>{

    const currentUser = userDb.find((user) => user.email === user.value);

    if(currentUser){
        if(currentUser.loginPassword === loginPassword.value){
            alert("You are logged in!");
        } else {
            alert("Email or password are not correct");
        }
    } else {
        alert("Account does not exist");
    }

    loginContainer.classList.toggle('show');

    loginEmail.value = "";
    loginPassword.value = "";


});