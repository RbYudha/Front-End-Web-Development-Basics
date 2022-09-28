//Buat ambil ID disimpan dalam const
const selectForm = document.querySelector('#form');
const selectInput = document.querySelector('#input');
const selectKegiatan = document.querySelector('#kegiatan');

// array untuk simpan 
let list_kegiatan = [];

// eventListener apabila ada event submit
selectForm.addEventListener('submit', function (event) {
    // agar page tidak reload saat submit
    event.preventDefault();
    add_kegiatan(selectInput.value); 
});


function add_kegiatan(aktifitas) {
    // jika aktifitas tidak kosong dan bukan simbol
    if (aktifitas !== '' && aktifitas.match(/[a-zA-Z]+$/) ) {
        // membuat objek kegiatan
        const kegiatan = {
            id: Date.now(),
            name: aktifitas,
            beres: false
        };
        // tambah ke list_kegiatan array
        list_kegiatan.push(kegiatan);

        addToLocalStorage(list_kegiatan);

        // membersihkan input box
        selectInput.value = '';
    } else {
        alert ("Masukan Ulang Kegiatan mu");
    }
}

function cetaklist_kegiatan(list_kegiatan) {
    // membersihkan isi list agar tidak berulang
    selectKegiatan.innerHTML = '';
    // for each untuk setiap aktifitas pada array list_kegiatan
    list_kegiatan.forEach(function (aktifitas) {
        // check apakah aktifitas sudah beres
        const checked = aktifitas.beres
            ? 'checked'
            : null;

        const li = document.createElement('li');

        li.setAttribute('class', 'list-group-item');

        li.setAttribute('data-key', aktifitas.id);

        li.innerHTML = `
        <input type="checkbox" class="form-check-input me-1" ${checked}>
        <label class="form-check-label">${aktifitas.name}</label>
        <button type="button" class="btn btn-danger btn-sm float-end" id='del-button'>Hapus</button>
      `;
        // tambah <li> ke dalam <ul>
        selectKegiatan.append(li);
    });
}

// untuk menambahkan list_kegiatan pada local storage
function addToLocalStorage(list_kegiatan) {
    // mengubah array menjadi string menggunakan JSON
    localStorage.setItem('List Kegiatan', JSON.stringify(list_kegiatan));
    cetaklist_kegiatan(list_kegiatan);
}

// Mengambil data dari local storage
function getFromLocalStorage() {
    const ld = localStorage.getItem('List Kegiatan');
    // jika ld tidak kosong
    if (ld != null) {
      // mengubah kembali string ke array dan disimpan dalam list_kegiatan
      list_kegiatan = JSON.parse(ld);
      cetaklist_kegiatan(list_kegiatan);
    }
  };

  // cek apakah beres true atau false
function toggle(id) {
    list_kegiatan.forEach(function(aktifitas) {
      if (aktifitas.id == id) {
        aktifitas.beres = !aktifitas.beres;
      }
    });

  addToLocalStorage(list_kegiatan);
  }
  
  function deleteKegiatan(id) {
    // Untuk memfilter <li> berdasarkan id dan update array list_kegiatan
    list_kegiatan = list_kegiatan.filter(function(aktifitas) {
      return aktifitas.id != id;
    });
    addToLocalStorage(list_kegiatan);
  }
  
  // ambil semua dari local storage
  getFromLocalStorage();

selectKegiatan.addEventListener('click', function(event) {
    if (event.target.type === 'checkbox') {
      //panggil fungsi toggle -> mendapatkan data key untuk pengecekan checkbox
      toggle(event.target.parentElement.getAttribute('data-key'));
    }

    if (event.target.id === 'del-button') {
      //memanggil fungsi deleteKegiatan dan ambil data-key attribute parent element <li> 
      //tempat del-button berada
      deleteKegiatan(event.target.parentElement.getAttribute('data-key'));
    }
  });