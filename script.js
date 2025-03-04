document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".menu-btn");
    const contentBox = document.getElementById("content");

    const contents = {
        "pendahuluan": `<h2>Pendahuluan</h2><p>Pada awal abad ke-20, Indonesia masih dijajah Belanda...</p>`,
        "latar-belakang": `<h2>Latar Belakang</h2><ul>
                            <li><strong>Pendidikan Tidak Merata:</strong> Sekolah hanya untuk priyayi...</li>
                            <li><strong>Politik Etis:</strong> Belanda mulai membuka sekolah, tapi terbatas...</li>
                            <li><strong>Perubahan Sosial:</strong> Kaum intelektual mulai sadar...</li>
                            <li><strong>Pengaruh Luar Negeri:</strong> Gerakan nasionalisme dari India...</li>
                           </ul>`,
        "pendirian": `<h2>Pendirian Budi Utomo</h2><p>Budi Utomo didirikan pada 20 Mei 1908...</p>
                      <ul>
                        <li><strong>dr. Wahidin Sudirohusodo:</strong> Mengusulkan gagasan organisasi...</li>
                        <li><strong>dr. Soetomo:</strong> Mendirikan organisasi bersama mahasiswa STOVIA...</li>
                        <li><strong>R.T. Ario Tirtokusumo:</strong> Ketua pertama Budi Utomo...</li>
                      </ul>`,
        "kongres": `<h2>Kongres Pertama</h2><p>Kongres diadakan pada 3-5 Oktober 1908 di Yogyakarta...</p>
                    <ul>
                        <li><strong>Ketua Pertama:</strong> R.T. Ario Tirtokusumo</li>
                        <li><strong>Kantor Pusat:</strong> Yogyakarta</li>
                        <li><strong>Fokus:</strong> Pendidikan dan budaya, bukan politik</li>
                    </ul>`,
        "tujuan": `<h2>Sifat & Tujuan</h2><p>Budi Utomo bersifat sosial dan pendidikan...</p>
                   <ul>
                    <li><strong>Meningkatkan Pendidikan:</strong> Mendorong rakyat pribumi bersekolah...</li>
                    <li><strong>Memajukan Budaya:</strong> Melestarikan seni dan budaya Indonesia...</li>
                    <li><strong>Persatuan:</strong> Membangun kesadaran nasionalisme...</li>
                   </ul>`,
        "kemunduran": `<h2>Kemunduran</h2><p>Organisasi mengalami kemunduran karena...</p>
                       <ul>
                        <li><strong>Kurangnya Keberanian Politik:</strong> Tidak berani menentang Belanda secara langsung...</li>
                        <li><strong>Munculnya Organisasi Baru:</strong> Sarekat Islam dan Indische Partij mulai menarik lebih banyak anggota...</li>
                        <li><strong>Bergabung dengan Parindra:</strong> Pada 1935, Budi Utomo melebur dengan Partai Indonesia Raya...</li>
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
