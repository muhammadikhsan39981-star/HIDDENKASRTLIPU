# GUA LAUMEHE — Digital Cave Experience

Website pariwisata digital untuk Gua Laumehe, Wantopi, Mawasangka Timur, Kabupaten Buton Tengah, Sulawesi Tenggara.
Dibuat dengan HTML5, CSS3, JavaScript murni, Leaflet, dan OpenStreetMap — tanpa proses build, siap diunggah ke GitHub Pages.

## Struktur file

```
index.html     → struktur halaman & SEO
style.css      → seluruh tampilan (warna utama di :root)
script.js      → interaksi + SEMUA DATA yang dapat diedit (bagian DATA di atas file)
images/        → foto, gambar mapping, favicon
README.md
```

## Status konten (penting)

| Konten | Status |
| --- | --- |
| Foto di `images/*.webp` | **Ilustrasi sementara**, bukan foto asli. Ganti dengan foto asli Gua Laumehe (nama file sama). |
| Gambar digital mapping | Belum diunggah. Letakkan file asli sebagai `images/mapping-laumehe.jpg`. Selama file belum ada, placeholder `mapping-placeholder.svg` yang tampil. |
| Sejarah, legenda, budaya | Placeholder bertanda `[Placeholder]` di `STORY_CHAPTERS` (script.js). Isi dari wawancara masyarakat & sumber terpercaya. |
| Deskripsi titik gua | Placeholder di `CAVE_POINTS` (script.js). Nilai edukasi bersifat umum tentang gua karst. |
| Kedalaman ±86 m & jalur ±400 m | Informasi awal, perlu verifikasi lapangan. |
| Danau Biru / area air | Perlu konfirmasi keberadaan dan kondisinya. |
| Virtual tour 360° | Belum tersedia (placeholder). |
| Media sosial | Tautan belum diatur (`index.html`, bagian footer). |

## Cara mengedit

### 1. Gambar digital mapping
Simpan gambar asli ke `images/mapping-laumehe.jpg` (atau ubah `CONFIG.mapImage` di script.js). Gambar ditampilkan apa adanya tanpa diubah.

### 2. Posisi marker
Di `script.js` → `CAVE_POINTS`, ubah `mapX` dan `mapY` (dalam **persen** dari lebar/tinggi gambar mapping).
Contoh: `mapX: 50, mapY: 25` = tengah horizontal, seperempat dari atas.
Posisi marker hanya penanda visual pada gambar — **bukan koordinat GPS**.

### 3. Koordinat lokasi utama
`CONFIG.geo` di script.js (default: -5.374252, 122.466040).

### 4. Virtual tour
Ganti isi `<div class="tour__frame" id="tourFrame">` di index.html, misalnya:

```html
<!-- Video YouTube -->
<iframe src="https://www.youtube.com/embed/ID_VIDEO" title="Virtual tour Gua Laumehe" allowfullscreen loading="lazy"></iframe>

<!-- Video lokal -->
<video src="images/tour.mp4" controls playsinline poster="images/hero.webp"></video>
```

Untuk panorama 360°, gunakan viewer seperti [Pannellum](https://pannellum.org/) dengan foto equirectangular (rasio 2:1).

### 5. Galeri
Edit array `GALLERY` di script.js. Kategori: `pintu`, `formasi`, `ruang`, `air`, `aktivitas`.

## Menjalankan secara lokal
Cukup buka `index.html` di browser, atau jalankan server lokal:

```
npx serve .
# atau
pnpm install && pnpm dev
```

## Deploy ke GitHub Pages
1. Unggah `index.html`, `style.css`, `script.js`, `images/`, dan `README.md` ke repository.
2. Buka **Settings → Pages**, pilih branch `main` dan folder `/ (root)`.
3. Website akan tersedia di `https://<username>.github.io/<repo>/`.

Semua path bersifat relatif, sehingga aman untuk subfolder GitHub Pages.

## Keselamatan
Eksplorasi gua wajib mengikuti arahan pemandu lokal, menggunakan perlengkapan yang sesuai, dan menghindari area yang belum dinyatakan aman.
