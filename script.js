/* =========================================================
   GUA LAUMEHE — Digital Cave Experience
   Semua konten yang dapat diedit ada di bagian DATA di bawah.
   ========================================================= */

/* ======================= DATA ======================= */

const CONFIG = {
  // Ganti dengan file digital mapping asli (letakkan di folder images/).
  mapImage: "images/mapping-laumehe.jpg",
  mapFallback: "images/mapping-placeholder.svg",
  // Titik lokasi utama dari gambar referensi (bukan koordinat bagian dalam gua).
  geo: { lat: -5.374252, lng: 122.46604 },
  maxZoom: 5,
};

/*
  CAVE_POINTS — dipakai oleh marker Digital Mapping dan kartu Explore.
  mapX / mapY = posisi marker dalam PERSEN terhadap lebar/tinggi gambar mapping.
  Koreksi nilai ini agar sesuai dengan gambar mapping asli.
  Posisi ini adalah penanda visual, BUKAN koordinat GPS.
*/
const CAVE_POINTS = [
  {
    id: "pintu-masuk",
    name: "Pintu Masuk",
    tag: "Titik Awal",
    color: "#2ef2c8",
    image: "images/pintu-masuk.webp",
    mapX: 10, mapY: 55,
    short: "Gerbang menuju dunia bawah tanah — titik awal seluruh jalur eksplorasi.",
    description: "[Placeholder] Deskripsi kondisi pintu masuk Gua Laumehe: ukuran mulut gua, vegetasi di sekitarnya, dan akses menuju titik ini. Isi berdasarkan observasi lapangan.",
    education: "Mulut gua merupakan zona terang, tempat cahaya matahari masih masuk. Zona ini biasanya menjadi peralihan antara ekosistem luar dan ekosistem gua.",
    safety: "Lakukan briefing bersama pemandu lokal sebelum masuk. Periksa helm dan senter. Perhatikan permukaan batu yang licin.",
  },
  {
    id: "stalaktit",
    name: "Ruang Stalaktit",
    tag: "Formasi Atap",
    color: "#38d9f5",
    image: "images/stalaktit.webp",
    mapX: 27, mapY: 38,
    short: "Formasi batuan yang menggantung dari langit-langit gua.",
    description: "[Placeholder] Deskripsi ruang stalaktit: bentuk, ukuran perkiraan, dan ciri khas formasi. Isi berdasarkan dokumentasi lapangan.",
    education: "Stalaktit terbentuk dari tetesan air yang mengandung kalsium karbonat. Setiap tetes meninggalkan endapan mineral yang sangat tipis, sehingga pertumbuhannya berlangsung dalam waktu yang sangat lama.",
    safety: "Jangan menyentuh stalaktit — minyak dari kulit dapat menghentikan pertumbuhannya. Waspadai atap rendah.",
  },
  {
    id: "stalagmit",
    name: "Ruang Stalagmit",
    tag: "Formasi Lantai",
    color: "#f5c451",
    image: "images/stalagmit.webp",
    mapX: 43, mapY: 62,
    short: "Formasi yang tumbuh dari lantai gua ke arah atas.",
    description: "[Placeholder] Deskripsi ruang stalagmit dan formasi yang dapat diamati di area ini. Isi berdasarkan dokumentasi lapangan.",
    education: "Stalagmit tumbuh dari lantai gua akibat tetesan air dari atas. Jika stalaktit dan stalagmit bertemu, terbentuklah pilar (column).",
    safety: "Tetap di jalur yang ditentukan pemandu. Jangan memanjat atau menginjak formasi batuan.",
  },
  {
    id: "danau-biru",
    name: "Danau Biru",
    tag: "Area Air · Perlu Konfirmasi",
    color: "#4f8dff",
    image: "images/danau-biru.webp",
    mapX: 58, mapY: 42,
    short: "Area air di dalam gua. Keberadaan dan kondisinya perlu dikonfirmasi.",
    description: "[Placeholder] Deskripsi area air: kedalaman, kejernihan, dan kondisi musiman. Keberadaan danau perlu dikonfirmasi melalui survei lapangan sebelum dipublikasikan.",
    education: "Air di dalam gua karst umumnya berasal dari rembesan air hujan melalui celah batu gamping, dan berperan penting dalam proses pembentukan gua.",
    safety: "Jangan berenang atau masuk ke air tanpa izin dan pendampingan pemandu. Kedalaman air bisa menipu.",
  },
  {
    id: "ruang-besar",
    name: "Ruang Besar",
    tag: "Chamber Utama",
    color: "#ff7a8a",
    image: "images/ruang-besar.webp",
    mapX: 75, mapY: 58,
    short: "Ruang terluas di sepanjang jalur eksplorasi.",
    description: "[Placeholder] Deskripsi ruang besar: perkiraan luas, tinggi langit-langit, dan hal menarik yang dapat diamati. Isi berdasarkan pengukuran lapangan.",
    education: "Ruang besar (chamber) dapat terbentuk ketika pelarutan batu gamping dan runtuhan atap terjadi dalam waktu yang panjang.",
    safety: "Jaga jarak antaranggota rombongan. Jangan berpencar dan selalu dalam jangkauan cahaya pemandu.",
  },
  {
    id: "ruang-akhir",
    name: "Ruang Akhir",
    tag: "Titik Terjauh",
    color: "#b58cff",
    image: "images/ruang-akhir.webp",
    mapX: 90, mapY: 40,
    short: "Titik terjauh jalur eksplorasi wisata yang dapat dijangkau.",
    description: "[Placeholder] Deskripsi ruang akhir: batas jalur wisata yang aman dan alasan pembatasan akses. Isi berdasarkan arahan pengelola.",
    education: "Zona gelap total di bagian dalam gua memiliki suhu dan kelembapan yang relatif stabil, dan dapat menjadi habitat organisme khas gua.",
    safety: "Jangan melewati batas jalur yang ditetapkan. Area setelah titik ini belum dinyatakan aman untuk wisatawan.",
  },
];

/* STORY_CHAPTERS — isi berdasarkan wawancara masyarakat & sumber terpercaya. */
const STORY_CHAPTERS = [
  {
    id: "asal-usul",
    title: "Asal-usul Gua Laumehe",
    image: "images/pintu-masuk.webp",
    summary: "[Placeholder] Ceritakan asal-usul nama “Laumehe” dan bagaimana gua ini pertama kali dikenal oleh masyarakat Wantopi.",
    details: [
      "Makna nama “Laumehe” menurut tokoh adat / masyarakat setempat.",
      "Waktu dan cara gua pertama kali ditemukan atau dikenal.",
      "Sumber: nama narasumber, tanggal wawancara.",
    ],
  },
  {
    id: "legenda",
    title: "Sejarah & Legenda Masyarakat",
    image: "images/ruang-besar.webp",
    summary: "[Placeholder] Ruang untuk sejarah lisan dan legenda yang diwariskan masyarakat. Jangan dipublikasikan sebelum dikonfirmasi dengan narasumber.",
    details: [
      "Cerita rakyat atau legenda yang berkaitan dengan gua.",
      "Peristiwa sejarah yang berhubungan dengan kawasan Wantopi.",
      "Sumber: narasumber, dokumen desa, atau literatur terkait.",
    ],
  },
  {
    id: "geologi",
    title: "Keunikan Geologi Gua",
    image: "images/stalaktit.webp",
    summary: "Gua batu gamping terbentuk melalui pelarutan batuan oleh air selama waktu yang sangat panjang, menghasilkan lorong, ruang, dan formasi seperti stalaktit serta stalagmit.",
    details: [
      "[Placeholder] Jenis batuan dan karakteristik geologi Gua Laumehe (perlu kajian ahli).",
      "[Placeholder] Formasi khas yang ditemukan di dalam gua.",
      "Catatan: gunakan data dari peneliti atau instansi geologi.",
    ],
  },
  {
    id: "budaya",
    title: "Nilai Budaya & Kearifan Lokal",
    image: "images/eksplorasi.webp",
    summary: "[Placeholder] Nilai budaya, pantangan, atau tata krama yang dipegang masyarakat terhadap Gua Laumehe.",
    details: [
      "Aturan adat atau etika yang perlu dihormati pengunjung.",
      "Peran gua dalam kehidupan sosial masyarakat.",
      "Sumber: tokoh adat / pemerintah desa.",
    ],
  },
  {
    id: "konservasi",
    title: "Konservasi & Pelestarian Alam",
    image: "images/stalagmit.webp",
    summary: "Formasi gua tumbuh sangat lambat dan mudah rusak. Pelestarian membutuhkan keterlibatan masyarakat, pengelola, dan pengunjung.",
    details: [
      "Tidak menyentuh, mematahkan, atau mencoret formasi batuan.",
      "Tidak meninggalkan sampah dan tidak membuat kebisingan berlebih.",
      "[Placeholder] Program konservasi yang dijalankan pengelola / komunitas lokal.",
    ],
  },
];

/* GALLERY — ganti src dengan foto asli. category: pintu | formasi | ruang | air | aktivitas */
const GALLERY = [
  { src: "images/pintu-masuk.webp", caption: "Pintu masuk gua (ilustrasi)", category: "pintu", tall: true },
  { src: "images/stalaktit.webp", caption: "Formasi stalaktit (ilustrasi)", category: "formasi" },
  { src: "images/ruang-besar.webp", caption: "Ruang gua (ilustrasi)", category: "ruang" },
  { src: "images/stalagmit.webp", caption: "Formasi stalagmit (ilustrasi)", category: "formasi", tall: true },
  { src: "images/danau-biru.webp", caption: "Area air — perlu konfirmasi (ilustrasi)", category: "air" },
  { src: "images/eksplorasi.webp", caption: "Aktivitas eksplorasi (ilustrasi)", category: "aktivitas" },
  { src: "images/ruang-akhir.webp", caption: "Lorong bagian dalam (ilustrasi)", category: "ruang", tall: true },
  { src: "images/hero.webp", caption: "Suasana di dalam gua (ilustrasi)", category: "ruang" },
];

/* ======================= HELPERS ======================= */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const pad = (n) => String(n).padStart(2, "0");
const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let toastTimer;
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

/* ======================= NAVBAR ======================= */

function initNav() {
  const nav = $("#nav");
  const toggle = $("#navToggle");
  const menu = $("#navMenu");

  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const closeMenu = () => {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Buka menu");
  };
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
  });
  $$(".nav__link", menu).forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (e) => e.key === "Escape" && closeMenu());

  const links = $$(".nav__link");
  const sectionMap = { location: "mapping", tour: "explore" };
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = sectionMap[entry.target.id] || entry.target.id;
        links.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === `#${id}`));
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  $$("main section[id]").forEach((s) => observer.observe(s));
}

/* ======================= REVEAL + PARTICLES ======================= */

function initReveal() {
  $$(".hero .reveal").forEach((el, i) => el.style.setProperty("--d", i));
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  $$(".reveal").forEach((el) => observer.observe(el));
}

function initParticles() {
  if (reduceMotion) return;
  const container = $("#particles");
  const count = window.innerWidth < 600 ? 14 : 28;
  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const p = document.createElement("span");
    p.style.left = `${Math.random() * 100}%`;
    p.style.top = `${40 + Math.random() * 60}%`;
    p.style.animationDuration = `${8 + Math.random() * 10}s`;
    p.style.animationDelay = `${Math.random() * 8}s`;
    const size = 1 + Math.random() * 3;
    p.style.width = p.style.height = `${size}px`;
    frag.appendChild(p);
  }
  container.appendChild(frag);
}

/* ======================= STORYTELLING ======================= */

function initStory() {
  const list = $("#timelineList");
  const wrap = $("#storyChapters");

  list.innerHTML = STORY_CHAPTERS.map(
    (c, i) => `<li><a href="#chapter-${c.id}"><small>BAB ${pad(i + 1)}</small>${c.title}</a></li>`
  ).join("");

  wrap.innerHTML = STORY_CHAPTERS.map(
    (c, i) => `
    <article class="chapter glass reveal" id="chapter-${c.id}">
      <div class="chapter__media">
        <img src="${c.image}" alt="Ilustrasi ${c.title}" loading="lazy" width="1200" height="655" />
        <span class="chapter__num" aria-hidden="true">${pad(i + 1)}</span>
      </div>
      <div class="chapter__body">
        <p class="eyebrow">Bab ${pad(i + 1)}</p>
        <h3>${c.title}</h3>
        <p>${c.summary}</p>
        <div class="chapter__more" id="more-${c.id}">
          <div><ul>${c.details.map((d) => `<li>${d}</li>`).join("")}</ul></div>
        </div>
        <button class="link-btn" type="button" aria-expanded="false" aria-controls="more-${c.id}">
          <em>Read More</em> <span aria-hidden="true">⌄</span>
        </button>
      </div>
    </article>`
  ).join("");

  $$(".chapter .link-btn", wrap).forEach((btn) => {
    btn.addEventListener("click", () => {
      const chapter = btn.closest(".chapter");
      const open = chapter.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(open));
      btn.querySelector("em").textContent = open ? "Show Less" : "Read More";
    });
  });

  const tLinks = $$("a", list);
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        tLinks.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === `#${entry.target.id}`));
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  $$(".chapter", wrap).forEach((c) => observer.observe(c));
}

/* ======================= DIGITAL MAPPING (zoom & pan) ======================= */

const mapState = { scale: 1, x: 0, y: 0, width: 0, height: 0, activeIndex: -1 };

function initMapViewer() {
  const stage = $("#mapStage");
  const canvas = $("#mapCanvas");
  const img = $("#mapImage");
  const markersEl = $("#mapMarkers");
  const zoomLabel = $("#zoomLevel");

  img.addEventListener("error", function onErr() {
    img.removeEventListener("error", onErr);
    img.src = CONFIG.mapFallback;
  });
  img.src = CONFIG.mapImage;

  markersEl.innerHTML = CAVE_POINTS.map(
    (p, i) => `
    <button class="marker" type="button" style="left:${p.mapX}%;top:${p.mapY}%;--c:${p.color}" data-index="${i}" aria-label="Titik ${i + 1}: ${p.name}">
      ${i + 1}<span class="marker__label">${p.name}</span>
    </button>`
  ).join("");

  $("#mapLegend").innerHTML = CAVE_POINTS.map(
    (p, i) => `<li><button type="button" data-index="${i}"><i style="--c:${p.color}">${i + 1}</i>${p.name}</button></li>`
  ).join("");

  const apply = (animate = false) => {
    canvas.style.transition = animate && !reduceMotion ? "transform .6s cubic-bezier(.22,1,.36,1)" : "none";
    canvas.style.transform = `translate(${mapState.x}px, ${mapState.y}px) scale(${mapState.scale})`;
    markersEl.style.setProperty("--inv", String(1 / mapState.scale));
    $$(".marker", markersEl).forEach((m) => m.style.setProperty("--inv", String(1 / mapState.scale)));
    zoomLabel.textContent = `${Math.round(mapState.scale * 100)}%`;
  };

  const constrain = () => {
    const sw = stage.clientWidth;
    const sh = stage.clientHeight;
    const cw = mapState.width * mapState.scale;
    const ch = mapState.height * mapState.scale;
    mapState.x = cw <= sw ? (sw - cw) / 2 : clamp(mapState.x, sw - cw, 0);
    mapState.y = ch <= sh ? (sh - ch) / 2 : clamp(mapState.y, sh - ch, 0);
  };

  const layout = () => {
    const sw = stage.clientWidth;
    canvas.style.width = `${sw}px`;
    mapState.width = sw;
    mapState.height = img.naturalWidth ? (sw * img.naturalHeight) / img.naturalWidth : sw * 0.625;
    canvas.style.height = `${mapState.height}px`;
    constrain();
    apply();
  };

  const zoomAt = (newScale, cx, cy, animate) => {
    newScale = clamp(newScale, 1, CONFIG.maxZoom);
    const ratio = newScale / mapState.scale;
    mapState.x = cx - (cx - mapState.x) * ratio;
    mapState.y = cy - (cy - mapState.y) * ratio;
    mapState.scale = newScale;
    constrain();
    apply(animate);
  };
  const zoomCenter = (factor) => zoomAt(mapState.scale * factor, stage.clientWidth / 2, stage.clientHeight / 2, true);
  const reset = () => {
    mapState.scale = 1;
    constrain();
    apply(true);
  };

  mapState.focus = (index) => {
    const p = CAVE_POINTS[index];
    const target = Math.max(mapState.scale, 2);
    mapState.scale = target;
    mapState.x = stage.clientWidth / 2 - (p.mapX / 100) * mapState.width * target;
    mapState.y = stage.clientHeight / 2 - (p.mapY / 100) * mapState.height * target;
    constrain();
    apply(true);
  };

  img.addEventListener("load", layout);
  window.addEventListener("resize", layout);
  if (img.complete) layout();

  $("#zoomIn").addEventListener("click", () => zoomCenter(1.4));
  $("#zoomOut").addEventListener("click", () => zoomCenter(1 / 1.4));
  $("#zoomReset").addEventListener("click", reset);
  $("#zoomFull").addEventListener("click", () => {
    const viewer = $("#mapViewer");
    if (document.fullscreenElement) document.exitFullscreen();
    else if (viewer.requestFullscreen) viewer.requestFullscreen();
    else showToast("Mode layar penuh tidak didukung di perangkat ini");
  });
  document.addEventListener("fullscreenchange", () => setTimeout(layout, 50));

  stage.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      const rect = stage.getBoundingClientRect();
      zoomAt(mapState.scale * (e.deltaY < 0 ? 1.15 : 1 / 1.15), e.clientX - rect.left, e.clientY - rect.top, false);
    },
    { passive: false }
  );

  // Pointer drag + pinch zoom
  const pointers = new Map();
  let dragStart = null;
  let pinchStart = null;
  let captured = false;

  stage.addEventListener("pointerdown", (e) => {
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    captured = false;
    if (pointers.size === 1) {
      dragStart = { px: e.clientX, py: e.clientY, x: mapState.x, y: mapState.y };
    } else if (pointers.size === 2) {
      const [a, b] = [...pointers.values()];
      const rect = stage.getBoundingClientRect();
      pinchStart = {
        dist: Math.hypot(a.x - b.x, a.y - b.y),
        scale: mapState.scale,
        cx: (a.x + b.x) / 2 - rect.left,
        cy: (a.y + b.y) / 2 - rect.top,
      };
    }
  });

  stage.addEventListener("pointermove", (e) => {
    if (!pointers.has(e.pointerId)) return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pointers.size === 2 && pinchStart) {
      const [a, b] = [...pointers.values()];
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      zoomAt(pinchStart.scale * (dist / pinchStart.dist), pinchStart.cx, pinchStart.cy, false);
      return;
    }
    if (!dragStart) return;
    const dx = e.clientX - dragStart.px;
    const dy = e.clientY - dragStart.py;
    // Capture only after real movement so marker clicks still work.
    if (!captured && Math.hypot(dx, dy) > 5) {
      captured = true;
      stage.setPointerCapture(e.pointerId);
      stage.classList.add("is-dragging");
    }
    if (captured) {
      mapState.x = dragStart.x + dx;
      mapState.y = dragStart.y + dy;
      constrain();
      apply();
    }
  });

  const endPointer = (e) => {
    pointers.delete(e.pointerId);
    if (pointers.size < 2) pinchStart = null;
    if (pointers.size === 0) {
      dragStart = null;
      stage.classList.remove("is-dragging");
    } else if (pointers.size === 1) {
      const [p] = [...pointers.values()];
      dragStart = { px: p.x, py: p.y, x: mapState.x, y: mapState.y };
    }
  };
  stage.addEventListener("pointerup", endPointer);
  stage.addEventListener("pointercancel", endPointer);

  stage.addEventListener("keydown", (e) => {
    const step = 60;
    const actions = {
      ArrowLeft: () => (mapState.x += step),
      ArrowRight: () => (mapState.x -= step),
      ArrowUp: () => (mapState.y += step),
      ArrowDown: () => (mapState.y -= step),
    };
    if (e.key === "+" || e.key === "=") return zoomCenter(1.4);
    if (e.key === "-") return zoomCenter(1 / 1.4);
    if (e.key === "0") return reset();
    if (actions[e.key]) {
      e.preventDefault();
      actions[e.key]();
      constrain();
      apply(true);
    }
  });

  markersEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".marker");
    if (btn) selectPoint(Number(btn.dataset.index));
  });
  $("#mapLegend").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-index]");
    if (btn) selectPoint(Number(btn.dataset.index));
  });
}

function pointDetailHTML(p, i, variant) {
  const total = CAVE_POINTS.length;
  return `
    ${variant === "panel" ? `<div class="point-panel__img"><img src="${p.image}" alt="Ilustrasi ${p.name}" loading="lazy" /></div>` : ""}
    <span class="point-panel__tag" style="--c:${p.color}">Titik ${pad(i + 1)} / ${pad(total)} · ${p.tag}</span>
    <h3 id="${variant === "modal" ? "modalTitle" : "pointTitle"}">${p.name}</h3>
    <div class="info-block"><h4>Deskripsi</h4><p>${p.description}</p></div>
    <div class="info-block"><h4>Nilai Edukasi</h4><p>${p.education}</p></div>
    <div class="info-block info-block--safety"><h4>Keselamatan</h4><p>${p.safety}</p></div>
    <p class="note">Foto ilustrasi sementara. Posisi pada peta bukan koordinat GPS terverifikasi.</p>
  `;
}

function selectPoint(index) {
  const i = (index + CAVE_POINTS.length) % CAVE_POINTS.length;
  const p = CAVE_POINTS[i];
  mapState.activeIndex = i;

  $$(".marker").forEach((m) => m.classList.toggle("is-active", Number(m.dataset.index) === i));
  $("#pointEmpty").hidden = true;
  const body = $("#pointBody");
  body.hidden = false;
  body.innerHTML = `
    ${pointDetailHTML(p, i, "panel")}
    <div class="point-panel__nav">
      <button class="btn btn--ghost btn--sm" type="button" data-step="-1">← Sebelumnya</button>
      <button class="btn btn--primary btn--sm" type="button" data-step="1">Titik Berikutnya →</button>
    </div>
    <button class="link-btn" type="button" data-show-all>Lihat semua titik</button>
  `;
  // Re-trigger entrance animation
  body.style.animation = "none";
  void body.offsetWidth;
  body.style.animation = "";

  body.querySelectorAll("[data-step]").forEach((b) =>
    b.addEventListener("click", () => selectPoint(i + Number(b.dataset.step)))
  );
  body.querySelector("[data-show-all]").addEventListener("click", () => {
    body.hidden = true;
    $("#pointEmpty").hidden = false;
    $$(".marker").forEach((m) => m.classList.remove("is-active"));
  });

  mapState.focus?.(i);
}

/* ======================= LEAFLET LOCATION ======================= */

function initLocation() {
  const { lat, lng } = CONFIG.geo;
  const coordText = `${lat}, ${lng.toFixed(6)}`;
  const gmaps = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

  $("#gmapsBtn").href = gmaps;

  $("#copyCoord").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(coordText);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = coordText;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    $("#copyStatus").textContent = `Koordinat disalin: ${coordText}`;
    showToast("Koordinat berhasil disalin");
  });

  const mapEl = $("#leafletMap");
  let loaded = false;
  const load = () => {
    if (loaded || typeof L === "undefined") return;
    loaded = true;
    const map = L.map(mapEl, { scrollWheelZoom: false, zoomControl: true }).setView([lat, lng], 14);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    const icon = L.divIcon({ className: "", html: '<div class="geo-pin"></div>', iconSize: [22, 22], iconAnchor: [11, 11] });
    L.marker([lat, lng], { icon, title: "Gua Laumehe" })
      .addTo(map)
      .bindPopup(
        `<strong>Gua Laumehe</strong><br/>Wantopi, Mawasangka Timur<br/>Buton Tengah, Sulawesi Tenggara<br/><small>${coordText}</small><br/><a href="${gmaps}" target="_blank" rel="noopener noreferrer">Open in Google Maps →</a>`
      )
      .openPopup();
    mapEl.addEventListener("click", () => map.scrollWheelZoom.enable(), { once: true });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        load();
        if (loaded) observer.disconnect();
      }
    },
    { rootMargin: "300px" }
  );
  observer.observe(mapEl);
  window.addEventListener("load", () => {
    if (!loaded && mapEl.getBoundingClientRect().top < window.innerHeight + 300) load();
  });
}

/* ======================= EXPLORE CARDS + MODAL ======================= */

let lastFocus = null;

function openModal(html) {
  const modal = $("#modal");
  lastFocus = document.activeElement;
  $("#modalContent").innerHTML = html;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  $(".modal__close", modal).focus();
}
function closeModal() {
  const modal = $("#modal");
  if (modal.hidden) return;
  modal.hidden = true;
  document.body.style.overflow = "";
  lastFocus?.focus();
}

function openPointModal(i) {
  const p = CAVE_POINTS[i];
  openModal(`
    <div class="modal-detail" style="--c:${p.color}">
      <div class="modal-detail__media">
        <img src="${p.image}" alt="Ilustrasi ${p.name}" />
        <span class="chapter__num" aria-hidden="true">${pad(i + 1)}</span>
      </div>
      <div class="modal-detail__body">
        ${pointDetailHTML(p, i, "modal")}
        <div class="point-panel__nav">
          <button class="btn btn--ghost btn--sm" type="button" data-modal-step="${i - 1}">← Sebelumnya</button>
          <button class="btn btn--primary btn--sm" type="button" data-modal-step="${i + 1}">Berikutnya →</button>
        </div>
        <a class="link-btn" href="#mapping" data-to-map="${i}">Lihat di Digital Mapping →</a>
      </div>
    </div>
  `);
}

function initExplore() {
  const grid = $("#exploreGrid");
  grid.innerHTML = CAVE_POINTS.map(
    (p, i) => `
    <button class="cave-card reveal" type="button" style="--c:${p.color}" data-index="${i}" aria-label="Buka detail ${p.name}">
      <img src="${p.image}" alt="" loading="lazy" width="1200" height="655" />
      <span class="cave-card__num" aria-hidden="true">${pad(i + 1)}</span>
      <span class="cave-card__corner" aria-hidden="true">+</span>
      <span class="cave-card__body">
        <span class="cave-card__tag">${p.tag}</span>
        <span class="cave-card__title">${p.name}</span>
        <span class="cave-card__desc">${p.short}</span>
        <span class="cave-card__line" aria-hidden="true"></span>
      </span>
    </button>`
  ).join("");

  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".cave-card");
    if (card) openPointModal(Number(card.dataset.index));
  });

  const modal = $("#modal");
  modal.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) return closeModal();
    const step = e.target.closest("[data-modal-step]");
    if (step) {
      const n = CAVE_POINTS.length;
      return openPointModal((Number(step.dataset.modalStep) + n) % n);
    }
    const toMap = e.target.closest("[data-to-map]");
    if (toMap) {
      const idx = Number(toMap.dataset.toMap);
      closeModal();
      setTimeout(() => selectPoint(idx), 500);
    }
  });

  modal.addEventListener("keydown", (e) => {
    if (e.key !== "Tab") return;
    const focusables = $$("button, a[href]", modal);
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });
}

/* ======================= GALLERY + LIGHTBOX ======================= */

function initGallery() {
  const grid = $("#galleryGrid");
  grid.innerHTML = GALLERY.map(
    (g, i) => `
    <figure class="masonry__item reveal ${g.tall ? "tall" : ""}" data-category="${g.category}">
      <button type="button" data-index="${i}" aria-label="Perbesar: ${g.caption}" class="masonry__btn">
        <img src="${g.src}" alt="${g.caption}" loading="lazy" width="1200" height="655" />
      </button>
      <figcaption>${g.caption}</figcaption>
    </figure>`
  ).join("");

  $("#galleryFilters").addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    const f = chip.dataset.filter;
    $$(".chip").forEach((c) => {
      const active = c === chip;
      c.classList.toggle("is-active", active);
      c.setAttribute("aria-pressed", String(active));
    });
    $$(".masonry__item", grid).forEach((item) => {
      item.classList.toggle("is-hidden", f !== "all" && item.dataset.category !== f);
    });
  });

  const lb = $("#lightbox");
  const lbImg = $("#lbImg");
  const lbCap = $("#lbCaption");
  let current = 0;
  let opener = null;

  const visibleIndexes = () =>
    $$(".masonry__item:not(.is-hidden) button", grid).map((b) => Number(b.dataset.index));

  const show = (i) => {
    current = i;
    lbImg.src = GALLERY[i].src;
    lbImg.alt = GALLERY[i].caption;
    lbCap.textContent = GALLERY[i].caption;
  };
  const step = (d) => {
    const list = visibleIndexes();
    const pos = list.indexOf(current);
    show(list[(pos + d + list.length) % list.length]);
  };
  const open = (i) => {
    opener = document.activeElement;
    show(i);
    lb.hidden = false;
    document.body.style.overflow = "hidden";
    $("#lbClose").focus();
  };
  const close = () => {
    if (lb.hidden) return;
    lb.hidden = true;
    document.body.style.overflow = "";
    opener?.focus();
  };

  grid.addEventListener("click", (e) => {
    const b = e.target.closest("button[data-index]");
    if (b) open(Number(b.dataset.index));
  });
  $("#lbClose").addEventListener("click", close);
  $("#lbPrev").addEventListener("click", () => step(-1));
  $("#lbNext").addEventListener("click", () => step(1));
  lb.addEventListener("click", (e) => e.target === lb && close());

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      close();
      closeModal();
    }
    if (!lb.hidden) {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    }
  });
}

/* ======================= MISC ======================= */

function initMisc() {
  $("#year").textContent = new Date().getFullYear();
  $$("[data-placeholder-link]").forEach((a) =>
    a.addEventListener("click", (e) => {
      e.preventDefault();
      showToast("Tautan media sosial belum diatur");
    })
  );
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initStory();
  initMapViewer();
  initLocation();
  initExplore();
  initGallery();
  initMisc();
  initParticles();
  initReveal();
});
