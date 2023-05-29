function capturarDatos() {
    var pregunta1 = document.querySelector('input[name="pregunta1"]:checked');
    var pregunta2 = document.querySelector('input[name="pregunta2"]:checked');
    var pregunta3 = document.querySelector('input[name="pregunta3"]:checked');
    var sugerencias = document.getElementById("sugerencias").value;

    if (!pregunta1 || !pregunta2 || !pregunta3) {
        swal({
            title: 'Error',
            text: '¡Rellenar todo los campos para enviar!',
            icon: 'warning',
        });
        return;
    }

    pregunta1 = pregunta1.value;
    pregunta2 = pregunta2.value;
    pregunta3 = pregunta3.value;

    console.log("Pregunta 1: " + pregunta1);
    console.log("Pregunta 2: " + pregunta2);
    console.log("Pregunta 3: " + pregunta3);
    console.log("Sugerencias: " + sugerencias);

    swal({
        title: 'Exito',
        text: '¡El formulario ha sido enviado con éxito!',
        icon: 'success'
    });

    document.getElementById("valoracionForm").reset();
}