document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".menu-btn");
    const contentBox = document.getElementById("content");

    const contents = {
        "pendahuluan": `<h2>Pendahuluan</h2><p>Pada awal abad ke-20, Indonesia masih dijajah Belanda.Saat itu, kehidupan rakyat pribumi sangat sulit, terutama dalam hal pendidikan dan ekonomi. Kesempatan belajar bagi rakyat biasa sangat terbatas, karena pendidikan hanya bisa diakses oleh kaum elite dan priyayi.
Namun, muncul kesadaran di kalangan pemuda, terutama mahasiswa STOVIA (School tot Opleiding van Inlandsche Artsen), bahwa satu-satunya cara untuk meningkatkan kesejahteraan rakyat adalah melalui pendidikan.
Kesadaran ini melahirkan organisasi Budi Utomo, yang menjadi organisasi modern pertama di Indonesia dan dianggap sebagai awal Kebangkitan Nasional. Organisasi ini bertujuan untuk meningkatkan pendidikan dan kebudayaan pribumi, serta menjadi inspirasi bagi gerakan nasionalisme yang lebih luas hingga menuju kemerdekaan Indonesia.</p>`,
        "latar-belakang": `<h2>Latar Belakang</h2><ul>
                            <li><strong>Budi Utomo lahir karena beberapa faktor penting yang mendorong kesadaran nasional, yaitu:

1. Pendidikan yang Tidak Merata:</strong> Pada masa kolonial, pendidikan di Indonesia sangat terbatas.
Sekolah-sekolah yang ada hanya diperuntukkan bagi anak-anak dari kalangan priyayi (bangsawan) dan pegawai pemerintah.
Rakyat biasa sulit mendapatkan pendidikan karena biayanya mahal dan kesempatan sangat terbatas.
Kurikulum yang diajarkan lebih banyak berorientasi pada kepentingan pemerintah kolonial.</li>
                            <li><strong>2. Politik Etis ( 1901 ):</strong> Politik Etis diperkenalkan oleh Ratu Wilhelmina ( di usulkan oleh 3 orang Belanda yaitu : Pieter Brooshooft,Conrad Theodor van Deventer,Wolter Robert van Hoëvell ) terdiri dari tiga program utama: irigasi (pengairan), emigrasi (perpindahan penduduk), dan edukasi (pendidikan).
Pemerintah kolonial mulai membangun beberapa sekolah untuk pribumi, tetapi jumlahnya masih sangat sedikit dan lebih menguntungkan Belanda.
Pendidikan untuk pribumi lebih berfokus pada mencetak pegawai rendahan, bukan untuk membangun intelektual pribumi..</li>
                            <li><strong>3. Perubahan Sosial dan Munculnya Kaum Intelektual Pribumi:</strong> Dengan semakin banyak pribumi yang mendapatkan pendidikan, lahirlah generasi baru yang mulai sadar akan pentingnya persatuan dan kemajuan bangsa.
Mereka menyadari bahwa satu-satunya cara untuk meningkatkan kesejahteraan adalah melalui pendidikan.</li>
                            <li><strong>4. Pengaruh Luar Negeri:</strong>Di luar negeri, banyak bangsa yang mulai melawan penjajahan, seperti di India dengan gerakan Mahatma Gandhi.
Pemuda-pemuda Indonesia yang belajar di luar negeri mulai membawa ide-ide nasionalisme dan perlawanan terhadap penjajahan.</li>
                           </ul>`,
        "pendirian": `<h2>Pendirian Budi Utomo</h2><p>Budi Utomo didirikan pada 20 Mei 1908...</p>
                      <ul>
                        <li><strong>dr. Wahidin Sudirohusodo:</strong> Seorang dokter lulusan STOVIA yang memiliki kepedulian terhadap pendidikan pribumi.
Ia berkeliling Jawa untuk menggalang dana pendidikan bagi anak-anak pribumi berbakat.
Mengusulkan ide pembentukan organisasi yang fokus pada kemajuan bangsa melalui pendidikan.</li>
                        <li><strong>dr. Soetomo:</strong> Mahasiswa STOVIA yang menerima gagasan Wahidin Sudirohusodo.
Bersama teman-temannya, ia mengambil langkah konkret dengan mendirikan Budi Utomo.
Kelak menjadi tokoh penting dalam pengembangan organisasi ini.</strong> 
                      </ul>`,
        "kongres": `<h2>Kongres Pertama</h2><p>Kongres diadakan pada 3-5 Oktober 1908 di Yogyakarta untuk merumuskan struktur organisasi.</p>
                    <ul>
                        <li><strong>Ketua Pertama:</strong> R.T. Ario Tirtokusumo</li>
                        <li><strong>Kantor Pusat:</strong> Yogyakarta</li>
                        <li><strong>Fokus:</strong> Pendidikan dan budaya, bukan politik</li>
                    </ul>`,
        "tujuan": `<h2>Sifat & Tujuan</h2><p>Budi Utomo bersifat sosial dan pendidikan...</p>
                   <ul>
                    <li><strong>Meningkatkan Pendidikan:</strong> Mendorong rakyat pribumi bersekolah...</li>
                    <li><strong>Memajukan Budaya:</strong> Melestarikan seni dan budaya Indonesia...</li>
                    <li><strong>Persatuan:</strong> Membangun kesadaran nasionalisme. Slogan dan Prinsip Budi Utomo:

Slogan utama: "Indie Vooruit" atau "Hindia Maju".
Mereka percaya bahwa kemajuan bangsa harus dimulai dari pendidikan yang baik.</li>
                   </ul>`,
        "kemunduran": `<h2>Kemunduran</h2><p>Organisasi mengalami kemunduran karena beberapa faktor yaitu :</p>
                       <ul>
                        <li><strong>1. Kurangnya Keberanian Politik:</strong> Budi Utomo lebih fokus pada pendidikan dan budaya, sementara rakyat mulai menginginkan perjuangan yang lebih tegas melawan Belanda.</li>
                        <li><strong>2. Munculnya Organisasi Baru:</strong> Banyak anggota muda yang kecewa dan keluar untuk mendirikan organisasi lain yang lebih aktif dalam perjuangan politik, seperti:

Sarekat Islam (1911) → Dipimpin oleh H.O.S. Tjokroaminoto, lebih fokus pada perjuangan ekonomi dan politik rakyat pribumi.

Indische Partij (1912) → Didirikan oleh Tiga Serangkai (Douwes Dekker, Cipto Mangunkusumo, Ki Hajar Dewantara), yang menentang penjajahan secara terang-terangan.</li>
                        <li><strong>3. Bergabung dengan Parindra:</strong> Pada Kongres Solo tahun 1935, Budi Utomo bergabung dengan Parindra.
Setelah bergabung, nama Budi Utomo mulai tenggelam dan akhirnya tidak lagi aktif sebagai organisasi mandiri.
.</li>
                       </ul>`,
        "kesimpulan": `<h2>Kesimpulan</h2><p>Budi Utomo adalah pelopor pergerakan nasional di Indonesia...</p>
                       <ul>
                        <li>Menjadi organisasi pertama yang membangkitkan kesadaran nasional.</li>
                        <li>Berfokus pada pendidikan dan kebudayaan.</li>
                        <li>Menginspirasi lahirnya organisasi nasional lainnya.</li>
                       </ul>`
    };

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const section = this.getAttribute("data-section");
            contentBox.innerHTML = contents[section];
        });
    });
});
