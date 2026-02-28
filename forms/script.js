const conatiner = document.getElementById('container')

const registerBtn = document.getElementById('register');

const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () =>{
    conatiner.classList.add("active");
});

loginBtn.addEventListener('click', () =>{
    conatiner.classList.remove("active");
});