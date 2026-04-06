# Backend Data Keuangan Santri

Aplikasi backend untuk pengelolaan data keuangan santri, lembaga, dan wali santri secara terintegrasi.

## 🚀 Fitur Utama

- **Manajemen Santri**: Pengelolaan data santri lengkap (`Laki-laki/Perempuan`, NIS, Kelas).
- **Manajemen Wali Santri**: Sistem akun untuk wali santri agar dapat memantau keuangan anak secara real-time.
- **Transaksi Keuangan**: Pencatatan Pemasukan dan Pengeluaran yang detail dan transparan.
- **Integrasi Pembayaran**: Mendukung pembayaran online menggunakan **Midtrans**.
- **Notifikasi Email (Brevo)**:
  - Notifikasi ke Admin saat ada Wali atau Santri baru.
  - Notifikasi ke Admin & Wali saat data Santri diperbarui.
  - Notifikasi ke Admin & Wali saat ada transaksi baru (Pemasukan/Pengeluaran).
- **Manajemen Institusi**: Mendukung multi-lembaga/multi-institusi dalam satu sistem.
- **Sistem Keanggotaan/Subscription**: Fitur paket berlangganan untuk institusi.

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js (v5.x)
- **Language**: TypeScript
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Email Service**: Brevo (Sendinblue)
- **Payment Gateway**: Midtrans
- **Image/File Storage**: Cloudinary
- **Authentication**: JWT & Bcrypt

## 📁 Struktur Proyek

```
src/
├── controllers/    # Logika penanganan request & response
├── services/       # Business logic layer
├── repository/     # Data access layer (Prisma queries)
├── routes/         # Definisi endpoint API
├── utils/          # Utility & Helpers (Email, API Key, Env)
├── prisma/         # Schema & Migrations
└── types/          # TypeScript interface & types
```

## ⚙️ Persiapan & Instalasi

### 1. Clone Repository
```bash
git clone https://github.com/mohdthoriq/dataKeuanganSantri.git
cd dataKeuanganSantri
```

### 2. Instal Dependensi
```bash
npm install
```

### 3. Konfigurasi Environment
Salin file `.env.example` (jika ada) atau buat file `.env` baru dan sesuaikan variabelnya:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/db_name"
JWT_SECRET="your_secret_key"

# Brevo Configuration
BREVO_API_KEY="your_brevo_api_key"
SENDER_NAME="Nama Pengirim"
SENDER_EMAIL="email@pengirim.com"

# Midtrans Configuration
MIDTRANS_SERVER_KEY="your_server_key"
MIDTRANS_CLIENT_KEY="your_client_key"
MIDTRANS_IS_PRODUCTION=false

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"
```

### 4. Database Migration
```bash
npm run prisma:migrate
```

### 5. Menjalankan Aplikasi
```bash
# Mode Pengembangan
npm run dev

# Mode Produksi
npm run build
npm start
```

## 📚 API Endpoints (Ringkasan)

| Module | Base Path | Description |
| :--- | :--- | :--- |
| **Auth** | `/api/auth` | Login, Register, Forget Password |
| **Santri** | `/api/santri` | Kelola data santri |
| **Users** | `/api/users` | Kelola data user & wali |
| **Transaction** | `/api/transaction` | Catat pemasukan/pengeluaran |
| **Payment** | `/api/payments` | Integrasi pembayaran Midtrans |
| **Notification** | `/api/notification` | Sistem notifikasi in-app |
| **Institution** | `/api/institution` | Kelola data lembaga |

---
*Dibuat oleh [mohdthoriq](https://github.com/mohdthoriq)*
