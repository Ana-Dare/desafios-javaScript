function validarNumero() {
    let numero = parseInt(document.getElementById('numero').value);

      if (numero > 0) {
        alert('O número é positivo!');
      } else if (numero < 0) {
        alert('O número é negativo!');
      } else {
        alert('O número é zero!');
      }
    }

document.getElementById('verificar').addEventListener('click', validarNumero);