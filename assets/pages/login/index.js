import { footer, nav } from '../../js/navHeader/index.js'


window.onload = function () {
  const paths = {
  logotipo: "../../img/alurageek.svg",
  lupa: "../../img/lupa.png",
  home: "../../../index.html",
  url: "../product/index.html",
  login: "",
  inputShow: false
  } ;

  nav(paths);
  footer(paths); 
  
  
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessages = document.getElementById('errorMessages');
    
    // Clear previous error messages
    errorMessages.innerHTML = '';
    
    // Frontend validation
    if (!validateEmail(email)) {
      errorMessages.innerHTML += '<p>Email inválido.</p>';
    }

    if (password.length < 6) {
      errorMessages.innerHTML += '<p>La contraseña debe tener al menos 6 caracteres.</p>';
    }

    if (errorMessages.innerHTML === '') {
      // No errors, proceed with form submission
      try {
        const response = await fetch('http://localhost:5000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });

        if (response.ok) {
          alert('Login successful');
        } else {
          alert('Invalid email or password');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  });

  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }
};
