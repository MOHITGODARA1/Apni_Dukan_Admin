# Apni Dukan Admin Dashboard

**Apni Dukan Admin** is a complete admin panel for managing an e-commerce platform. It allows administrators to handle products, users, and orders efficiently through a responsive and user-friendly interface. The project uses **React.js** for the frontend and **Node.js with Express** for the backend.

---

## 🛠️ Features

- **Product Management:** Add, update, delete, and view products with details such as name, description, weight, price, category, and tags. Images are supported.  
- **User Management:** View and manage users, control access, and track user activities.  
- **Order Management:** View orders, update status, and manage inventory.  
- **File Uploads & Cloud Storage:** Upload product images with Multer and Cloudinary.  
- **Authentication:** Admin login using JWT ensures security.  
- **Responsive Design:** Fully responsive for desktop and mobile devices.  

---

## 📂 Project Structure

Apni-Dukan-Admin/
├─ backend/ # Node.js backend
│ ├─ controllers/ # Handles API logic for products, users, orders
│ ├─ models/ # MongoDB schema definitions
│ ├─ routes/ # API endpoints
│ ├─ db/ # Database connection configuration
│ └─ utils/ # Helper functions, e.g., Cloudinary setup
├─ frontend/ # React.js frontend
│ ├─ src/ # React components and pages
│ ├─ public/ # Static assets like images
│ └─ package.json
├─ .gitignore # Files/folders to ignore in Git
└─ README.md
---

## ⚡ Technologies Used

- **Frontend:** React.js, HTML5, CSS3, JavaScript  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT (JSON Web Tokens)  
- **File Uploads:** Multer  
- **Cloud Storage:** Cloudinary  
- **Deployment:** Netlify (frontend), Render/Heroku (backend)  

---

## 🔧 Installation Guide

### 1️⃣ Clone the repository

```bash
git clone https://github.com/MOHITGODARA1-Admin.git
cd Apni-Dukan-Admin

PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
