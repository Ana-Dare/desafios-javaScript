function calcularMedia(){
    let numero1 = parseFloat(document.getElementById('valor1').value);
    let numero2 = parseFloat(document.getElementById('valor2').value);

    if (isNaN(numero1) || isNaN(numero2)) {
    alert('Um dos valores inseridos não é válido.');
    } else{ 
    alert((numero1 + numero2) / 2) ;
 }
}

document.getElementById('calcular').addEventListener('click', calcularMedia);