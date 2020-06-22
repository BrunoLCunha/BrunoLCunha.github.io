let tudoMinusculo = () => {
    let texto = document.getElementById("texto").value
    document.getElementById("texto").value = texto.toLowerCase();
}

let tudoMaiusculo = () => {
    let texto = document.getElementById("texto").value
    document.getElementById("texto").value = texto.toUpperCase();
}

let contarCaracteres = () => {
    let texto = document.getElementById("texto")
    document.getElementById("quantidade").innerHTML = texto.value.length + ' caractere(s)';
}