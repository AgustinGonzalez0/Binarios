// Cambiar color de fondo y ajustar el color de texto
function changeBackgroundColor() {
    const color = document.getElementById("colorSelector").value;
    document.body.style.backgroundColor = color;
    document.body.style.color = color === "white" ? "black" : "white";
}

// Convertir entre binario y decimal
function convert() {
    const input = document.getElementById("conversionInput").value;
    const conversionType = document.getElementById("conversionType").value;
    let result;

    if (conversionType === "decimalToBinary") {
        if (/^\d+$/.test(input)) {
            result = parseInt(input).toString(2);
            document.getElementById("conversionResult").textContent = `Binario: ${result}`;
        } else {
            document.getElementById("conversionResult").textContent = "Nose como pudiste equivocarte, pero no se puede";
        }
    } else if (conversionType === "binaryToDecimal") {
        if (/^[01]+$/.test(input)) {
            result = parseInt(input, 2).toString();
            document.getElementById("conversionResult").textContent = `Decimal: ${result}`;
        } else {
            document.getElementById("conversionResult").textContent = "No se puede peteee";
        }
    }
}

// Realizar operaciones matemáticas
function calculate() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const operationType = document.getElementById("operationType").value;
    const operation = document.getElementById("operation").value;
    let n1, n2, result, processText;

    if (operationType === "binary") {
        n1 = parseInt(num1, 2);
        n2 = parseInt(num2, 2);
    } else {
        n1 = parseFloat(num1);
        n2 = parseFloat(num2);
    }

    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById("calculationResult").textContent = "nose como le hiciste para que te salga este mensaje, pero no se puede";
        return;
    }

    switch (operation) {
        case "add":
            result = n1 + n2;
            processText = `${num1} + ${num2} = ${result}`;
            break;
        case "subtract":
            result = n1 - n2;
            processText = `${num1} - ${num2} = ${result}`;
            break;
        case "multiply":
            result = n1 * n2;
            processText = `${num1} * ${num2} = ${result}`;
            break;
        case "divide":
            if (n2 === 0) {
                document.getElementById("calculationResult").textContent = "No se puede dividir por cero bolud@";
                return;
            }
            result = n1 / n2;
            processText = `${num1} / ${num2} = ${result}`;
            break;
    }

    if (operationType === "binary") {
        result = result.toString(2);
    }

    document.getElementById("calculationResult").textContent = `Resultado: ${result}`;
    document.getElementById("calculationProcess").textContent = `Proceso: ${processText}`;
}

// Guardar mensaje para mostrar a otros usuarios (simulación sin persistencia de datos)
function saveMessage() {
    const message = document.getElementById("messageInput").value;
    if (message.trim() === "") {
        document.getElementById("savedMessage").textContent = "El mensaje no puede estar vacío.";
    } else {
        document.getElementById("savedMessage").textContent = `Mensaje guardado: "${message}"`;
    }
}
