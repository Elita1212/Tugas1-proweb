function hitung(operator) {
    let input1 = document.getElementById("bil1").value;
    let input2 = document.getElementById("bil2").value;
    let angka1 = parseFloat(input1);
    let angka2 = parseFloat(input2);
    let hasil = 0;

    if (operator === '+') {
        hasil = angka1 + angka2;
    } else if (operator === '-') {
        hasil = angka1 - angka2;
    } else if (operator === 'x') {
        hasil = angka1 * angka2;
    } else if (operator === '/') {
        
        if (angka2 === 0) {
            alert("Tidak dapat membagi dengan angka 0!");
            return;
        }
        hasil = angka1 / angka2;
    }
    document.getElementById("hasil").value = hasil;
}