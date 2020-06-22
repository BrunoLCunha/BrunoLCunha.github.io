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

let celsiusConv = (c) => {
    document.getElementById("f").innerHTML = 'ºF = ' + ((parseFloat(c) * 9.0/5.0) + 32)
    document.getElementById("k").innerHTML = 'K = ' + (parseFloat(c) + 273.15)
}

let polegadasConv = (p) => {
    document.getElementById("mm").innerHTML = 'mm = ' + (parseFloat(p) * 25.4)
    document.getElementById("milha").innerHTML = 'Milhas = ' + (parseFloat(p) / 63360)
    document.getElementById("jarda").innerHTML = 'Jarda = ' + (parseFloat(p) / 36)
    document.getElementById("pe").innerHTML = 'Pé = ' + (parseFloat(p) / 12)
}