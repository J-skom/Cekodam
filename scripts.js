document.getElementById('khodamForm').addEventListener('submit', function(e){
    e.preventDefault();
    const nama = document.getElementById('namaLengkap').value;
    const khodam = generateKhodam(nama);
    document.getElementById('hasil').innerHTML = `<p><h4>Ko Liat Mi Itu Kodam Mu ${nama} "${khodam}"AWOKAWOK</h4></p>`;
    document.getElementById('namaLengkap').value = "";
})

function generateKhodam(nama){
    const khodams = [
        'Kuda Jantan',
        'Buah Naga',
        'Singa Senyum',
        'Naga Guling',
        'Macan Tersenyum',
        'Elang Ganteng',
        'Kuda Bersemangat',
        'Kelinci Gemas',
        'Tikus Imut',
        'Gajah Gembira',
        'Kucing Menggemaskan',
        'Anjing Setia',
        'Katak Ceria',
        'Kura-Kura Tangguh',
    ];

    const index = nama.length % khodams.length;
    return khodams[index];
}