🌟 Apni Dukan Admin Dashboard

Apni Dukan Admin is a complete admin panel for managing an e-commerce platform. It enables administrators to manage products, users, and orders with ease using a clean and responsive UI.
Built using React.js, Node.js, Express, and MongoDB, this project provides a full-stack solution for e-commerce management.

🛠️ Features
📦 Product Management

Add, edit, delete, and view products

Manage product details (name, description, weight, price, category, tags)

Upload product images using Multer + Cloudinary

Real-time image previews and validations

👥 User Management

View all registered users

Track user activities

Block/unblock users (if implemented)

🛍️ Order Management

View order list

Update order status (Pending → Packed → Shipped → Delivered)

Manage inventory automatically when orders are updated

🔐 Authentication & Security

Secure admin login using JWT

Password hashing with bcrypt

Protected routes using middleware

🌤️ Cloud Storage & File Handling

Cloudinary storage integration

Multer for local file handling

Auto-delete old images when updating (optional feature)

📱 Responsive UI

Fully responsive admin dashboard

Optimized for desktops, tablets, and mobile devices

Apni-Dukan-Admin/
├─ backend/              # Node.js backend
│  ├─ controllers/       # Handles logic (product, user, orders)
│  ├─ models/            # MongoDB schemas
│  ├─ routes/            # API routes
│  ├─ db/                # MongoDB connection
│  ├─ middleware/        # JWT auth, Multer setup
│  ├─ utils/             # Cloudinary config, helpers
│  └─ server.js          # App entry file
│
├─ frontend/             # React frontend
│  ├─ src/
│  │  ├─ components/     # Reusable components
│  │  ├─ pages/          # UI pages (Products, Orders, Login)
│  │  ├─ context/        # Global state (Auth, Theme)
│  │  ├─ utils/          # Helper functions
│  │  └─ App.js
│  ├─ public/
│  └─ package.json
│
├─ .env.example          # Environment variable example
├─ .gitignore
└─ README.md

⚡ Technologies Used
Frontend

React.js

React Router

Axios

CSS3 / Tailwind / Styled Components (depending on your setup)

Backend

Node.js

Express.js

MongoDB + Mongoose

Multer

Cloudinary

JWT Authentication

Bcrypt password hashing

Deployment

Frontend: Netlify / Vercel

Backend: Render / Railway / Heroku

Database: MongoDB Atlas

🔧 Installation Guide
1️⃣ Clone the Repository
git clone https://github.com/MOHITGODARA1/Apni-Dukan-Admin.git
cd Apni-Dukan-Admin

🖥️ Backend Setup
2️⃣ Install Backend Dependencies
cd backend
npm install

3️⃣ Create .env File

Create a new file inside backend/ named .env:

PORT=5000
MONGO_URI=your_mongo_connection_string

JWT_SECRET=your_jwt_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

4️⃣ Start Backend Server
npm start
# OR
nodemon server.js

🎨 Frontend Setup
5️⃣ Install Frontend Dependencies
cd ../frontend
npm install

6️⃣ Start Frontend
npm run dev
# OR
npm start

🚀 Deployment Guide
🌐 Deploy Backend (Render / Railway / Heroku)

Create a new project

Connect GitHub repo

Add environment variables (from .env)

Deploy

🌐 Deploy Frontend (Netlify / Vercel)

Import GitHub repo

Build command:

npm run build


Publish directory:

/frontend/dist  (for Vite)
/frontend/build (for CRA)

📌 API Endpoints (Quick Overview)
Product Routes
Method	Route	Description
POST	/api/products	Create product
GET	/api/products	Get all products
GET	/api/products/:id	Get single product
PUT	/api/products/:id	Update product
DELETE	/api/products/:id	Delete product
User Routes
Method	Route	Description
GET	/api/users	Get all users
PUT	/api/users/block/:id	Block user
PUT	/api/users/unblock/:id	Unblock user
Order Routes
Method	Route	Description
GET	/api/orders	Get all orders
PUT	/api/orders/status/:id	Update order status
🤝 Contribution Guideline

Contributions are welcome!
Follow these steps:

git checkout -b feature-branch
git commit -m "Added new feature"
git push origin feature-branch

📜 License

This project is licensed under the MIT License.