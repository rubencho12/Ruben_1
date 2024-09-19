function generarTabla() {
    // Obtener el número ingresado por el usuario
    const numero = parseInt(document.getElementById("numero").value);
    const resultadoDiv = document.getElementById("resultado");

    // Limpiar el resultado previo
    resultadoDiv.innerHTML = "";

    // Verificar si el número es válido
    if (isNaN(numero)) {
        resultadoDiv.innerHTML = "<p>Por favor, ingresa un número válido.</p>";
        return;
    }

    // Generar la tabla de multiplicar
    let tablaHTML = `<h2>Tabla de multiplicar del ${numero}</h2><ul>`;
    for (let i = 1; i <= 10; i++) {
        tablaHTML += `<li>${numero} x ${i} = ${numero * i}</li>`;
    }
    tablaHTML += "</ul>";

    // Mostrar el resultado
    resultadoDiv.innerHTML = tablaHTML;
}
