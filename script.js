function hasil() {
    var kode = parseFloat(document.getElementById("kode").value);
    var jumlah = parseFloat(document.getElementById("jumlah").value);

    if (!isNaN(kode) && !isNaN(jumlah)) {
        var sum = kode * jumlah;
        window.alert("total pembayaran adalah :  " + sum);
    } else {
        window.alert("Masukan bilangan yang valid");
    }
}

