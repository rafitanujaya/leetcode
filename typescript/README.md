# 📘 TypeScript Solutions – LeetCode Practice

Folder ini berisi solusi problem LeetCode yang diselesaikan menggunakan TypeScript. Setiap soal diorganisasi dalam folder tersendiri yang terdiri dari:

- `solution.ts` – implementasi utama
- `optimized.ts` - implementasi solusi yang dioptimasi "*jika ada*""
- `test.ts` – unit test menggunakan Jest
- `README.md` – dokumentasi penjelasan strategi dan pendekatan

---

## 🛠 Environment

Pastikan kamu menggunakan versi yang sesuai agar seluruh script dan testing berjalan lancar.

- **Node.js**: `>=18.x`
- **npm**: `>=9.x`
- **TypeScript**: `^5.x`
- **Jest**: `^29.x`
- **ts-jest**: `^29.x`

> Kamu bisa mengecek versi lokal dengan:

```bash
node -v
npm -v
npx tsc -v
npx jest --version
```

## ⚙️ Setup
Sebelum menjalankan solusi atau testing, pastikan kamu sudah melakukan install kebutuhan developlemnt `depedensi`:
```bash
npm install
```

## 🧪 Testing

### Menjalankan semua Test
Untuk menjalankan semua test disemua soal:
```bash
npm run test
```

### Menjalankan Test untuk soal tertentu
Masih dalam pembuatan 

## Struktur Folder
```
typescript/
├── 1-two-sum/
│   ├── solution.ts
│   ├── test.ts
│   └── README.md
├── 121-best-time-to-buy-and-sell-stock/
│   ├── solution.ts
│   ├── test.ts
│   └── README.md
├── babel.config.json       # settingan babel untuk keperluan jest
├── tsconfig.json          # Settingan typescript untuk mengatur behavior
├── package.json           # Mengatur informasi node.js dan beberapa settingan lain 
└── README.md               # Dokumentasi teknikal (file ini)
```

## 🧱 Konvensi Penulisan
Folder soal: {nomor-soal}-{judul-kebab-case}
Nama file:
- `solution.ts`
- `solution-naive.ts` -> solusi brute-force
- `optimized.ts`
- `test.ts`
- `README.md` -> dokumentasi persoal

## 🔧 Tools & Library
- TypeScript
- Jest untuk testing
- ts-jest untuk integrasi TypeScript dan Jest