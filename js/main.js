document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar que el formulario se envíe automáticamente

  // Obtener los valores de los campos de entrada
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  if (!name || !email || !phone || !message) {
    swal({
      title: 'Error',
      text: '¡Rellenar todo los campos para enviar!',
      icon: 'warning',
    });
    return;
  }

  // Construir el cuerpo del correo
  var body = "Nombres: " + name + "\n";
  body += "E-mail: " + email + "\n";
  body += "Telefono: " + phone + "\n";
  body += "Mensaje: " + message;

  /* 
      Enviar el correo utilizando un servicio de correo o una API de envío de correo
  */

  swal({
    title: 'Exito',
    text: '¡El formulario ha sido enviado con éxito!',
    icon: 'success'
  });

  document.getElementById("myForm").reset();
});









