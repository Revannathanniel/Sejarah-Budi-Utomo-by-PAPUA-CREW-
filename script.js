function tampilkanMateri(bagian) {
    let materi = {
        pendahuluan: `
            <h2>Pendahuluan</h2>
            <p>Pada awal abad ke-20, Indonesia masih berada di bawah penjajahan Belanda. Saat itu, kehidupan rakyat pribumi sangat sulit, terutama dalam hal pendidikan dan ekonomi. Kesempatan belajar bagi rakyat biasa sangat terbatas, karena pendidikan hanya bisa diakses oleh kaum elite dan priyayi.
Namun, muncul kesadaran di kalangan pemuda, terutama mahasiswa STOVIA (School tot Opleiding van Inlandsche Artsen), bahwa satu-satunya cara untuk meningkatkan kesejahteraan rakyat adalah melalui pendidikan.
Kesadaran ini melahirkan organisasi Budi Utomo, yang menjadi organisasi modern pertama di Indonesia dan dianggap sebagai awal Kebangkitan Nasional. Organisasi ini bertujuan untuk meningkatkan pendidikan dan kebudayaan pribumi, serta menjadi inspirasi bagi gerakan nasionalisme yang lebih luas hingga menuju kemerdekaan Indonesia.</p>
        `,
        latar: `
            <h2>Latar Belakang Pendirian Budi Utomo</h2>
            <p>Budi Utomo lahir karena beberapa faktor penting yang mendorong kesadaran nasional, yaitu:

1. Pendidikan yang Tidak Merata

Pada masa kolonial, pendidikan di Indonesia sangat terbatas.
Sekolah-sekolah yang ada hanya diperuntukkan bagi anak-anak dari kalangan priyayi (bangsawan) dan pegawai pemerintah.
Rakyat biasa sulit mendapatkan pendidikan karena biayanya mahal dan kesempatan sangat terbatas.
Kurikulum yang diajarkan lebih banyak berorientasi pada kepentingan pemerintah kolonial.

<br>
2. Politik Etis Belanda (1901)
Politik Etis diperkenalkan oleh Ratu Wilhelmina dan terdiri dari tiga program utama: irigasi (pengairan), emigrasi (perpindahan penduduk), dan edukasi (pendidikan).
Pemerintah kolonial mulai membangun beberapa sekolah untuk pribumi, tetapi jumlahnya masih sangat sedikit dan lebih menguntungkan Belanda.
Pendidikan untuk pribumi lebih berfokus pada mencetak pegawai rendahan, bukan untuk membangun intelektual pribumi.

<br>
3. Perubahan Sosial dan Munculnya Kaum Intelektual Pribumi
Dengan semakin banyak pribumi yang mendapatkan pendidikan, lahirlah generasi baru yang mulai sadar akan pentingnya persatuan dan kemajuan bangsa.
Mereka menyadari bahwa satu-satunya cara untuk meningkatkan kesejahteraan adalah melalui pendidikan.</p>
        `,
        pendirian: `
            <h2>Pendirian Budi Utomo</h2>
            <p>Budi Utomo resmi didirikan pada 20 Mei 1908 di Batavia...</p>
        `,
        kongres: `
            <h2>Kongres Pertama Budi Utomo</h2>
            <p>Kongres pertama diadakan pada 3-5 Oktober 1908 di Yogyakarta...</p>
        `,
        tujuan: `
            <h2>Sifat dan Tujuan Organisasi</h2>
            <p>Budi Utomo bersifat sosial, budaya, dan pendidikan...</p>
        `,
        kemunduran: `
            <h2>Kemunduran Organisasi</h2>
            <p>1. Kurangnya keberanian dalam politik<br>2. Munculnya organisasi baru...</p>
        `,
        kesimpulan: `
            <h2>Kesimpulan</h2>
            <p>Budi Utomo menjadi pelopor pergerakan nasional dan menginspirasi perjuangan kemerdekaan...</p>
        `
    };

    document.getElementById("konten").innerHTML = materi[bagian];
}
