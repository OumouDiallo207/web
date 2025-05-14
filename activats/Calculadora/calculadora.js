
function agregarCaracter(caracter) {
    document.getElementById("pantalla").value += caracter;
}
function limpiar() {
    document.getElementById("pantalla").value = '';
}
function calcular() {
    try {
        let resultado = eval(document.getElementById("pantalla").value);
        document.getElementById("pantalla").value = resultado;
    } catch (e) {
        document.getElementById("pantalla").value = 'Error';
    }
}
