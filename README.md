# 🏥 TIBER - Frontend (Tuberculosis Care App)

Selamat datang di repository Frontend **TIBER**. Projek ini dibangun menggunakan **React + Vite** dengan fokus pada performa dan skalabilitas untuk membantu pasien TBC dalam manajemen pengobatan.

---

## 🛠️ Tech Stack

* **Framework:** [React.js](https://react.dev/) (Vite)
* **State Management:** [Zustand](https://github.com/pmndrs/zustand) (with Persist Middleware)
* **Routing:** [React Router DOM v6](https://reactrouter.com/) (Data Browser Router)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **API Client:** Native Fetch API (with custom wrapper)

---

## 📂 Project Structure

Struktur folder ini dirancang agar modular dan mudah dipahami oleh tim:

```text
src/
├── assets/         # Gambar, ikon, dan aset statis
├── components/     # Reusable UI Components (Button, Input, dll)
├── hooks/          # Custom React Hooks
├── pages/          # Halaman utama aplikasi (Dashboard, Login, dll)
├── routes/         # Konfigurasi routing & Protected Routes
├── services/       # Komunikasi API (api.js & module services)
├── store/          # Zustand State Management (Auth, UI, dll)
└── utils/          # Fungsi pembantu (format tanggal, dll)

```

---

## 🚀 Getting Started

Ikuti langkah-langkah berikut untuk menjalankan projek di lokal:

1. **Clone Repository:**
```bash
git clone https://github.com/saputt/TIBER-FE.git
cd TIBER-FE

```


2. **Install Dependencies:**
```bash
npm install

```


3. **Setup Environment:**
Buat file `.env` di root folder dan masukkan Base URL API:
```env
VITE_API_URL=http://localhost:8000/api

```


4. **Run Development Server:**
```bash
npm run dev

```



---

## 🛤️ Workflow Kolaborasi (Git)

Untuk menjaga kualitas kode, harap ikuti aturan branch berikut:

1. **Main:** Hanya untuk kode yang sudah siap produksi (Stable).
2. **Dev:** Branch pusat pengembangan fitur.
3. **Feature Branch:** Buat branch baru dari `dev` untuk tiap tugas.
* Format: `feat/nama-fitur` atau `fix/nama-bug`
* Lakukan **Pull Request (PR)** ke `dev` setelah selesai.



---

## 📝 API Contract Reference

Dokumentasi endpoint dapat diakses di file [DOKUMENTASI_API.md] atau di ClickUp tim.

```

**Gimana? Ada bagian di README yang mau ditambahin?** Atau kamu sudah siap buat tarik napas dan mulai meet-nya? Semangat ya, Lead! Kamu pasti bisa nge-lead tim ini dengan mantap.

```
