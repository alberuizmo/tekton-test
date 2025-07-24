
# Tekton Test

A technical challenge project built with **Vue 3**, **TypeScript**, **Pinia**, and **PrimeVue**. This application displays a list of Star Wars characters and allows users to view detailed information about each one. The architecture follows **SOLID principles** and includes unit testing with **Vitest**.

---

## ⚙️ Tech Stack

- **Vue 3**
- **TypeScript**
- **Vite**
- **Pinia** (State Management)
- **Vue Router**
- **Sass**
- **PrimeVue** (UI components)
- **Vitest** + **Testing Library** (Unit tests)
- **Axios** (HTTP requests)

---

## 📁 Project Structure

```
src/
├── api/               # API service layer (decoupled via interfaces)
├── assets/            # Static assets (images, etc.)
├── components/        # Reusable UI components
├── helpers/           # Utility functions (e.g., formatters, extractors)
├── modules/           # Main views (List & Detail)
├── router/            # Application routes
├── store/             # Pinia stores (peopleStore)
├── styles/            # Global SCSS styles
└── types/             # TypeScript interfaces
```

---

## 🧠 Architecture & Principles

This project is designed following **SOLID principles**:

- **S**ingle Responsibility: API logic, state management, and UI are clearly separated.
- **O**pen/Closed: Components and stores are open for extension via injection.
- **D**ependency Inversion: APIs are injected into the store via a setter, allowing mocking in tests.

Additionally, the application uses a clean modular approach for scalability and readability.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/tekton-app.git
cd tekton-app
```

### 2. Install dependencies

Using `pnpm` (recommended):

```bash
pnpm install
```

Or using `npm`:

```bash
npm install
```

### 3. Set environment variables

Create a `.env` file at the root:

```
VITE_API_BASE_URL=https://swapi.info/api
```

### 4. Start development server

```bash
pnpm dev
```

---

## 📦 Build for production

```bash
pnpm build
```

---

## 🧪 Run unit tests

```bash
pnpm test
```

Includes coverage reporting via `@vitest/coverage-v8`.

---

## 📋 Features

- ✅ List of Star Wars characters with pagination
- ✅ Detail view with films, species, vehicles, and starships
- ✅ Global loading indicator
- ✅ Toast notifications for errors
- ✅ Fully typed with TypeScript
- ✅ Helper functions like `formatStarWarsDate` and `extractIdFromUrl`

---

## ✍️ Author

Developed by **Alberto Ruiz** as part of a technical challenge.  
Feel free to fork or adapt for your own learning or testing!

---

## 📄 License

This project is for evaluation purposes only and not intended for production use. No license is applied.
