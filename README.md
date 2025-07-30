# AI-Powered Analytics Dashboard 🚀

This is a modern, responsive, and fully functional **AI-Powered Analytics Dashboard** built using **React (Vite)** and **Tailwind CSS**. It simulates predictive analytics and smart reporting using dummy AI logic and weather data, optimized for a fast, beautiful user experience and deployable on Vercel.

🔗 **Live Demo:** [https://analytic-dashboard-parvej001s-projects.vercel.app](https://analytic-dashboard-parvej001s-projects.vercel.app)

---

## ✨ Features

- ✅ Responsive and animated dashboard UI
- 🧠 AI-generated dummy insights and predictions
- 📊 Interactive sales forecasts and charts (Recharts)
- 📁 SmartReports with:
  - Weather info (via OpenWeatherMap API)
  - Weather icons and live loading spinners
  - Summary reports and user metrics
  - Filter by country/weather
  - Export to **PDF** and **CSV**
  - Search and filter controls
- 🔄 Dark/Light Mode support (fully responsive)
- 📌 Sidebar navigation across multiple sections
- ✅ Production-ready and deployed on Vercel

---

## 🧠 Pages Overview

| Page | Description |
|------|-------------|
| `/` | Redirects to Home |
| `/home` | KPI cards, overview metrics |
| `/insights` | AIInsightCards with dummy AI-powered results |
| `/sales` | ForecastChart with sample sales prediction |
| `/users` | UserMetricsTable with engagement and churn likelihood |
| `/smart-reports` | Filterable, exportable, weather-integrated Smart Reports |
| `/settings`, `/profile`, `/assistant` | Placeholder for extended functionalities |

---

## ⚙️ Tech Stack

| Category | Tools |
|----------|-------|
| Frontend Framework | [React (Vite)](https://vitejs.dev) |
| Styling | [Tailwind CSS](https://tailwindcss.com) |
| Components/UI | [ShadCN/UI](https://ui.shadcn.com/), [Lucide Icons](https://lucide.dev/) |
| Charts | [Recharts](https://recharts.org/) |
| Export | [`jspdf`](https://github.com/parallax/jsPDF), [`jspdf-autotable`](https://github.com/simonbengtsson/jsPDF-AutoTable), [`papaparse`](https://www.papaparse.com/) |
| Weather API | [OpenWeatherMap](https://openweathermap.org/api) |
| Deployment | [Vercel](https://vercel.com) |

---

## 📂 Folder Structure
ai-dashboard-frontend/
├── components/ # Reusable components (cards, tables, charts, etc.)
├── pages/ # All major pages (Home, Insights, Reports, etc.)
├── data/ # Dummy datasets for users and reports for future use 
├── services/ # API utils like weather integration
├── context/ # Theme context, UI settings
├── hooks/ # Custom hooks foor future use
├── App.jsx # Main app routing
├── main.jsx # Entry point
└── index.css # Tailwind base styles

---

## 🛠️ Local Development

```bash
# Clone the repository
git clone https://github.com/Parvej001/Analytic-dashboard.git

cd ai-dashboard-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```
🤖 AI Simulation
While no real ML models are running in this frontend, AI features are simulated with logic and visual storytelling to demonstrate:

Churn risk scores

Sales forecasting

AI-generated business insights

Smart summary cards
