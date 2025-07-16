# 🛡️ Next.js Auth Demo

A simple authentication demo built with **Next.js 15.4.1**, **TypeScript**, and **Tailwind CSS**, demonstrating client-side login, session handling via `localStorage`, protected dashboard routing, and unit testing using **Jest** and **React Testing Library**.

---

## 🚀 Features

- 🔐 Client-side Login Authentication
- 🧠 User session handled using `localStorage`
- 🗂️ Protected Route (Dashboard)
- 💨 Tailwind CSS for styling
- 🧪 Unit Tests with Jest & React Testing Library
- 🌐 Fully typed with TypeScript

---

## 🛠️ Tech Stack

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/)

---

## 📂 Folder Structure

```
nextjs-auth-demo/
├── src/
│   ├── app/
│   │   ├── login/
│   │   │   └── page.tsx         # Login Page
│   │   ├── dashboard/
│   │   │   └── page.tsx         # Dashboard Page (Protected)
│   │   └── globals.css          # Tailwind base styles
│   ├── __tests__/
│   │   ├── login.test.tsx       # Login test
│   │   └── dashboard.test.tsx   # Dashboard test
├── jest.config.ts
├── jest.setup.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🧑‍💻 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/nextjs-auth-demo.git
cd nextjs-auth-demo
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✅ Running Tests

### Run all tests:
```bash
npm run test
```

---

## 🔍 Test Coverage

- ✅ Login form validation & redirection
- ✅ Dashboard access with/without login
- ✅ LocalStorage handling
- ✅ Router mocking

---

## 📌 Demo Credentials

To log in, use:
- **Email**: `demo@example.com`
- **Password**: `password`

---

## 📝 License

MIT

---

## 💡 Author

Made by Quratulaen(https://github.com/Quratsahoo)