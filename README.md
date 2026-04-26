# MERN Task Manager Application

A premium, modern task management application built using the MERN stack (MongoDB, Express, React, Node.js). 
This app features a dynamic, dark-mode user interface, priority tracking, and a seamless developer experience with a concurrent root runner.

## 🚀 Features
- **Create, Read, Update, Delete (CRUD):** Manage all your tasks effortlessly.
- **Priority Tracking:** Organize tasks by 'Low', 'Medium', or 'High' priorities with color-coded badges.
- **Premium UI:** Custom dark-mode design with sleek transitions, hover effects, and responsive layouts built purely with Vanilla CSS.
- **Zero-Config Workflow:** Run both the frontend and backend simultaneously using a single command.

## 📁 Architecture
- **`/client`**: React + Vite frontend application. Proxies API requests to the server backend.
- **`/server`**: Node.js + Express + MongoDB backend application.
- **Root**: Contains the orchestration script (`package.json`) to run both client and server concurrently.

## 🛠️ Prerequisites
- Node.js (v18.0.0 or higher)
- MongoDB Connection URI

## ⚡ Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Waffl3l0v3/task-manager-app.git
   cd task-manager-app
   ```

2. **Configure Environment Variables:**
   Navigate to the `server/` directory and configure your `.env` file containing your MongoDB URI and desired port:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

3. **Install Dependencies:**
   Run the following command from the root directory. This will automatically install dependencies for the root, the client, and the server simultaneously:
   ```bash
   npm run install-all
   ```

4. **Start the Application:**
   Run the following command from the root directory to spin up both the Vite client and the Express server concurrently:
   ```bash
   npm run start
   ```

The frontend will be available at `http://localhost:5173/` and the backend will be running on `http://localhost:5000/`.

## 📜 License
This project is open source and available for educational and portfolio purposes.
