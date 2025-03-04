document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".menu-btn");
    const contentBox = document.getElementById("content");

    const contents = {
        "pendahuluan": `<h2>Pendahuluan</h2><p>Pada awal abad ke-20, Indonesia masih dijajah Belanda. Kesempatan belajar bagi rakyat biasa sangat terbatas, karena pendidikan hanya bisa diakses oleh kaum elite dan priyayi. Kesadaran ini melahirkan organisasi Budi Utomo, yang menjadi organisasi modern pertama di Indonesia dan dianggap sebagai awal Kebangkitan Nasional.</p>`,
        "latar-belakang": `<h2>Latar Belakang</h2><ul>
                            <li><strong>1. Pendidikan yang Tidak Merata:</strong> Rakyat biasa sulit mendapatkan pendidikan karena biayanya mahal.</li>
                            <li><strong>2. Politik Etis (1901):</strong> Program pendidikan dari Belanda masih terbatas untuk pribumi.</li>
                            <li><strong>3. Perubahan Sosial:</strong> Muncul generasi terdidik yang sadar akan pentingnya persatuan.</li>
                            <li><strong>4. Pengaruh Luar Negeri:</strong> Gerakan nasionalisme dari luar negeri menginspirasi kaum muda Indonesia.</li>
                           </ul>`,
        "pendirian": `<h2>Pendirian Budi Utomo</h2><p>Didirikan pada 20 Mei 1908 oleh dr. Soetomo dan mahasiswa STOVIA.</p>
                      <ul>
                        <li><strong>dr. Wahidin Sudirohusodo:</strong> Mengusulkan ide pembentukan organisasi.</li>
                        <li><strong>dr. Soetomo:</strong> Mengembangkan organisasi dengan mahasiswa lainnya.</li>
                      </ul>`,
        "kongres": `<h2>Kongres Pertama</h2><p>Diadakan pada 3-5 Oktober 1908 di Yogyakarta untuk merumuskan struktur organisasi.</p>
                    <ul>
                        <li><strong>Ketua Pertama:</strong> R.T. Ario Tirtokusumo</li>
                        <li><strong>Kantor Pusat:</strong> Yogyakarta</li>
                        <li><strong>Fokus:</strong> Pendidikan dan budaya, bukan politik</li>
                    </ul>`,
        "tujuan": `<h2>Sifat & Tujuan</h2><p>Budi Utomo adalah organisasi sosial dan pendidikan.</p>
                   <ul>
                    <li><strong>Meningkatkan Pendidikan:</strong> Mendorong rakyat pribumi bersekolah.</li>
                    <li><strong>Memajukan Budaya:</strong> Melestarikan seni dan budaya Indonesia.</li>
                    <li><strong>Persatuan:</strong> Membangun kesadaran nasionalisme.</li>
                   </ul>`,
        "kemunduran": `<h2>Kemunduran</h2><p>Faktor kemunduran Budi Utomo:</p>
                       <ul>
                        <li><strong>1. Kurangnya Keberanian Politik:</strong> Rakyat ingin perjuangan lebih tegas melawan Belanda.</li>
                        <li><strong>2. Munculnya Organisasi Baru:</strong> Seperti Sarekat Islam dan Indische Partij.</li>
                        <li><strong>3. Bergabung dengan Parindra:</strong> Pada 1935, akhirnya melebur dan kehilangan eksistensi.</li>
                       </ul>`,
        "kesimpulan": `<h2>Kesimpulan</h2><p>Budi Utomo adalah pelopor pergerakan nasional.</p>
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
