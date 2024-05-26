import { footer, nav } from '../../js/navHeader/index.js';

window.onload = function () {
  const paths = {
    logotipo: "../../img/alurageek.svg",
    lupa: "../../img/lupa.png",
    home: "../../../index.html",
    url: "../product/index.html",
    login: "",
    inputShow: false
  };

  nav(paths);
  footer(paths);

  
  function validar() {
    console.log("La función validar está funcionando.");

    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    
    const errorMessages = document.getElementById('errorMessages');

    
    let errorMessage = '';

   
    if (email === '') {
      errorMessage += 'El campo de correo electrónico está vacío.<br>';
    }

    if (password === '') {
      errorMessage += 'El campo de contraseña está vacío.<br>';
    }

    if (errorMessage !== '') {
      errorMessages.innerHTML = errorMessage;
    } else {
      errorMessages.innerHTML = '';
      // Simular redireccionamiento después de un inicio de sesión exitoso
      alert('Inicio de sesión exitoso.');
      window.location.href = "../../../index.html"; // Redirige a la página principal
    }
  }

  // Hacer la función validar disponible globalmente
  window.validar = validar;
};


