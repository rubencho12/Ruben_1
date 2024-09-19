
  // Función que se ejecuta cuando se hace clic en el botón "Calcular Salario"
  function calcularSalario() {
    // Obtener el valor del input (horas trabajadas) y almacenarlo en la variable horasTrabajadas
    const horasTrabajadas = document.querySelector("#horas").value;

    // Definir las tarifas por hora
    const tarifaNormal = 16000; // Tarifa por hora para las primeras 40 horas
    const tarifaExtra = 25000; // Tarifa por hora para las horas extra (más de 40 horas)

    let salario; // Variable donde se almacenará el cálculo del salario

    // Si las horas trabajadas son 40 o menos, se multiplica por la tarifa normal
    if (horasTrabajadas <= 40) {
        salario = horasTrabajadas * tarifaNormal;
    } 
    // Si las horas trabajadas son más de 40, se calcula el salario con tarifa normal para las primeras 40 horas y tarifa extra para el resto
    else {
        const horasExtras = horasTrabajadas - 40; // Calcular cuántas horas extra trabajó
        salario = (40 * tarifaNormal) + (horasExtras * tarifaExtra); // Calcular el salario total
    }

    // Mostrar el resultado en el elemento con id "resultado"
    document.getElementById("resultado").textContent = `El salario semanal es: $${salario}`;
}