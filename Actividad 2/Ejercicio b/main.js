let temperaturas = [];

function solicitarTemperaturas() {
    const numTemperaturas = parseInt(document.getElementById("numTemperaturas").value);
    const formularioDiv = document.getElementById("formularioTemperaturas");
    formularioDiv.innerHTML = "";  // Limpiar formulario previo
    temperaturas = [];  // Reiniciar el array de temperaturas
    
    if (isNaN(numTemperaturas) || numTemperaturas <= 0) {
        formularioDiv.innerHTML = "<p>Por favor, ingresa un número válido de temperaturas.</p>";
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
    const numTemperaturas = temperaturas.length;
    let suma = 0;
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h2>Temperaturas Registradas:</h2><ul>";
    
    for (let i = 0; i < numTemperaturas; i++) {
        const temp = parseFloat(document.getElementById(`temperatura${i}`).value);
        temperaturas.push(temp);
        suma += temp;
        resultadoDiv.innerHTML += `<li>Temperatura ${i + 1}: ${temp}°C</li>`;
    }
    
    const promedio = suma / numTemperaturas;
    resultadoDiv.innerHTML += `</ul><h3>Promedio de Temperaturas: ${promedio.toFixed(2)}°C</h3>`.value;
}
