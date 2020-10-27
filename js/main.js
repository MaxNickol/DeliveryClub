const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}


// Day 1

const authBtn = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logForm = document.querySelector('#logInForm');
const logInInput = document.querySelector('#login');
const passwordInput = document.querySelector('#password');
const exitbtn = document.querySelector('.button-out');
const username = document.querySelector('.user-name');

let login = localStorage.getItem('login');

function unauthorized() {
  console.log('Unauthorized!')

    function logIn(event) {

      // checks the login or password otherwise alerts an alert popup
      if (logInInput.value == '' || logInInput.value == null){
        alert('Your login is incorrect!')
        event.preventDefault()
      }
      else if (passwordInput.value == '' || passwordInput.value == null) {
        alert('Your password is incorrect!');
        event.preventDefault()
      }
      else {
        event.preventDefault();

        login = logInInput.value;
  
        localStorage.setItem('login', login);
  
        logForm.removeEventListener('submit', logIn);
  
        logForm.reset();
        modalOpener();
        authCheck();
      }

      
  }

  authBtn.addEventListener('click', modalOpener);
  closeAuth.addEventListener('click', modalOpener);
  logForm.addEventListener('submit', logIn);

}

function authorized(){

  function logOut() {
    login = null;

    localStorage.removeItem('login');

    authBtn.style.display = 'block';
    username.style.display = 'none';
    exitbtn.style.display = 'none';

    exitbtn.removeEventListener('click', logOut);

    authCheck()
  }

  authBtn.style.display = 'none';

  username.innerHTML = login;
  username.style.display = 'block';

  exitbtn.style.display = 'block';

  exitbtn.addEventListener('click', logOut)

  console.log('Logged In!');
  }

  // Opens the modal popup;
function modalOpener() {

    modalAuth.classList.toggle('is-open');

}

// Checks the authorization;
function authCheck() {
  if(login) {
    authorized()
  }
  else {
    unauthorized()
  }
}

authCheck();



