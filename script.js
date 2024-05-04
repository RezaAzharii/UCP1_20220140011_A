function updateClock() {
    var now = new Date();

    var salam = getGreeting(now);
    document.getElementById('salam').textContent = salam;

    var jam = now.getHours();
    var menit = now.getMinutes();
    var ampm = jam >= 12 ? 'PM' : 'AM';
    jam = jam % 12;
    jam = jam ? jam : 12;
    var jamStr = padZero(jam) + ":" + padZero(menit) + " " + ampm;

    var tanggal = now.getDate();
    var bulan = now.getMonth() + 1;
    var tahun = now.getFullYear();
    var tanggalStr = padZero(tanggal) + "/" + padZero(bulan) + "/" + tahun;

    document.getElementById('jamtanggal').textContent = jamStr + " - " + tanggalStr;
}

function getGreeting(now) {
    var jam = now.getHours();
    if (jam < 12) {
        return "Pagi Ganteng 😘";
    } else if (jam < 18) {
        return "Siang Ganteng 😘";
    } else {
        return "Malam Ganteng 😘";
    }
}

function padZero(num) {
    return (num < 10 ? '0' : '') + num;
}

setInterval(updateClock, 1000);
updateClock();