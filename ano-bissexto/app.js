function verificarAnoBissexto() {
    let valorAno = parseInt(document.getElementById('ano').value);

    if ((valorAno % 4 === 0 && valorAno % 100 !== 0) || valorAno % 400 === 0) {
        alert('Ano bissexto');
    } else {
        alert('Ano não bissexto');
    }
}

document.getElementById('verificar').addEventListener('click', verificarAnoBissexto);