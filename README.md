# 📺 VideoStream Explorer

A responsive video discovery platform built with **React.js, Redux, and Tailwind CSS**, powered by the YouTube Data API v3.

---

## 🚀 Features

- 🔍 Real-time video search and discovery via YouTube Data API v3
- 📡 Fetches live video feeds, search results, and channel metadata
- ♾️ Infinite scrolling with asynchronous content loading
- 🔄 Global state management using Redux
- 🧭 Client-side routing with React Router DOM
- 📱 Fully responsive UI with reusable component architecture

---

## 🛠️ Tech Stack

| Layer        | Technology                        |
|--------------|-----------------------------------|
| Frontend     | React.js, Tailwind CSS            |
| State Mgmt   | Redux                             |
| Routing      | React Router DOM                  |
| API          | YouTube Data API v3               |

---

## 📁 Project Structure

```
videostream-explorer/
├── public/
└── src/
    ├── components/       # Reusable UI components
    ├── pages/            # Route-level page components
    ├── redux/
    │   ├── store.js      # Redux store configuration
    │   └── slices/       # Redux slices for state management
    ├── utils/            # API helpers and constants
    ├── App.js
    └── index.js
```

---

## ⚙️ Prerequisites

- [Node.js](https://nodejs.org/) (v16 or above)
- YouTube Data API v3 Key — get one from [Google Cloud Console](https://console.cloud.google.com/)

---

## 🏃 How to Run

### Step 1 — Clone the Repository

```bash
git clone https://github.com/your-username/videostream-explorer.git
cd videostream-explorer
```

### Step 2 — Install Dependencies

```bash
npm install
```

### Step 3 — Setup Environment Variables

Create a `.env` file in the root:

```env
REACT_APP_YOUTUBE_API_KEY=your_youtube_api_key_here
```

### Step 4 — Start the App

```bash
npm start
```

App runs at **http://localhost:3000**

---

## 🔌 API Used

| API                    | Purpose                                      |
|------------------------|----------------------------------------------|
| YouTube Data API v3    | Fetch video feeds, search results, channel info |

---

## 🐛 Troubleshooting

| Issue | Fix |
|---|---|
| Videos not loading | Check your API key in `.env` and ensure it has YouTube Data API v3 enabled |
| Quota exceeded | YouTube API has a daily quota limit; wait 24hrs or use a new key |
| Env variable not picked up | Restart the dev server after editing `.env` |

---

## 📄 License

This project is built for educational purposes.
