let temperaturas = [];

function solicitarTemperaturas() {
    const numTemperaturas = parseInt(document.getElementById("numTemperaturas").value);
    const formularioDiv = document.getElementById("formularioTemperaturas");
    formularioDiv.innerHTML = "";  // Limpiar formulario previo
    temperaturas = [];  // Reiniciar el array de temperaturas
    
    if (isNaN(numTemperaturas) || numTemperaturas <= 0) {
        formularioDiv.innerHTML = "<p>Por favor, ingresa un número válido de temperaturas.</p>";
        document.getElementById("calcularPromedioBtn").style.display = "none";
        return;
    }

    // Crear inputs para ingresar las temperaturas
    for (let i = 0; i < numTemperaturas; i++) {
        formularioDiv.innerHTML += `
            <label for="temperatura${i}">Temperatura ${i + 1}:</label>
            <input type="number" id="temperatura${i}" placeholder="Ej: 25"><br>`;
    }
    
    // Mostrar el botón para calcular el promedio
    document.getElementById("calcularPromedioBtn").style.display = "inline";
}

function calcularPromedio() {
    const numTemperaturas = parseInt(document.getElementById("numTemperaturas").value);
    let suma = 0;
    let validas = true;
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h2>Temperaturas Registradas:</h2><ul>";

    // Validar y sumar las temperaturas
    for (let i = 0; i < numTemperaturas; i++) {
        const temp = parseFloat(document.getElementById(`temperatura${i}`).value);
        
        // Aquí ocurría el error:
        // Si una temperatura no era ingresada o no era un número válido,
        // la función `parseFloat` devolvía `NaN`, lo que causaba que 
        // el cálculo del promedio fuera `NaN`.
        if (isNaN(temp)) {
            resultadoDiv.innerHTML = `<p>Por favor, ingresa todas las temperaturas correctamente.</p>`;
            validas = false;  // Marca como no válidas y detiene el cálculo
            break;  // Salir del bucle si se encuentra un valor no numérico
        }

        temperaturas.push(temp);  // Almacenar la temperatura en el array
        suma += temp;  // Sumar las temperaturas
        resultadoDiv.innerHTML += `<li>Temperatura ${i + 1}: ${temp}°C</li>`;
    }
    
    // Si todas las temperaturas son válidas, calcular el promedio
    if (validas) {
        const promedio = suma / numTemperaturas;  // Calcular el promedio
        resultadoDiv.innerHTML += `</ul><h3>Promedio de Temperaturas: ${promedio.toFixed(2)}°C</h3>`;
    }
}
