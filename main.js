// Inisialisasi instance Vue baru
new Vue({
    el: '#app',
    data: {
        jumlahPinjaman: 0,
        tingkatBunga: 0,
        jangkaWaktuPinjaman: 0,
        pembayaranBulanan: 0,
    },
    methods: {
        hitungPembayaranBulanan: function () {
            // Logika Anda untuk menghitung pembayaran bulanan akan ditempatkan di sini
            this.pembayaranBulanan = (this.jumlahPinjaman * (1 + this.tingkatBunga / 100)) / this.jangkaWaktuPinjaman;
        },
    },
});
