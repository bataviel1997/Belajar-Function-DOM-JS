// run `node index.js` in the terminal

// console.info('Selamat malam');

// function
// kumpulan beberapa perintah
// bisa digunakan kembali

function cetak_nama() {
  console.info('hello js function');
  console.info('malam');
}

// menangkap elemetn button dgn id btn_cetak
let btn_cetak = document.getElementById('btn_cetak');

// console.info(btn_cetak);

// tambahkan function cetak_nama ke buton cetak nama (mengambil objek)
btn_cetak.addEventListener('click', function(){
  cetak_nama();
});

// parameter pada function
// keyword function + funct name + (params1,..) + { perintah...}

function cetak_data_siswa(username, email, nis) {

 let formatText = `
 ===========================================
 Nama Siswa     : ${username}
 Email Siswa    : ${email}
 NIS            : ${nis}
 ===========================================
 `

//  console.info(formatText);
}

// tampilkan data ke element list_siswa render to html

function render_to_html(username, email, nis){

  let list_siswa = document.getElementById('list_siswa');


// innerHTML
list_siswa.innerHTML += `
<pre>
===========================================
 Nama Siswa     : ${username}
 Email Siswa    : ${email}
 NIS            : ${nis}
===========================================
</pre>
`

}

// tangkap element btn_tmbh_siswa
 let btn_tmbh_siswa = document.getElementById('btn_tmbh_siswa');

//  function untuk ambil input dari promt
function input_data_siswa() {

  // mengambil input data dari promt
  let nama_siswa = prompt('Masukan Nama Siswa : ');
  let email_siswa = prompt('Masukan Email Siswa : ');
  let nis = prompt('Masukan  NIS : ');
// jalankan cetak_data_siswa
  cetak_data_siswa(nama_siswa,email_siswa,nis);
// render to html
render_to_html(nama_siswa,email_siswa,nis);
}

btn_tmbh_siswa.addEventListener('click',function(){
  input_data_siswa();
});