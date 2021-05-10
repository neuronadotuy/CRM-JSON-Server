/** @format */

(function () {
  const formulario = document.querySelector("#formulario");

  formulario.addEventListener("submit", validarCliente);

  function validarCliente(e) {
    e.prevetDefault();

    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const telefono = document.querySelector("#telefono").value;
    const empresa = document.querySelector("#empresa").value;

    const cliente = {
      nombre: nombre,
      email: email,
      telefono: telefono,
      empresa: empresa,
    };

    if (validar(cliente)) {
      console.log("No pasó");
    }
    console.log("pasó");
  }

  function validar(Obj) {
    return !Object.values(Obj).every((input) => input !== "");
  }

  //   function mensajeError(mensaje) {
  //     const noRepeat = document.querySelector(".no--repeat");

  //     if (!noRepeat) {
  //       const error = document.createElement("p");
  //       error.classList.add("error", "no--repeat");
  //       error.textContent = mensaje;

  //       formulario.appendChild(error);
  //     }
  //   }
})();
