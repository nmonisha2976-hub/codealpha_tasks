🛒 CodeAlpha E-Commerce Store

A full-stack e-commerce web application built using Node.js, Express, and MongoDB Atlas, featuring authentication, product listing, and cart management.

🚀 Live Demo
🌐 Frontend: https://codealpha-tasks-mq2i.onrender.com
🔗 Backend API: https://codealpha-tasks-mq2i.onrender.com/api
✨ Features
User Registration & Login (JWT Authentication)
Product listing from backend API
Add to Cart & Remove from Cart (LocalStorage)
Basic Checkout functionality
RESTful API using Express
MongoDB Atlas database integration
Responsive frontend UI
🧰 Tech Stack

Frontend:

HTML
CSS
JavaScript (Vanilla JS)

Backend:

Node.js
Express.js

Database:

MongoDB Atlas (Mongoose)

Other Tools:

JWT Authentication
dotenv
CORS
📁 Project Structure
CodeAlpha_EcommerceStore/
│
├── config/
├── middleware/
├── models/
├── routes/
├── public/
│   ├── index.html
│   ├── app.js
│   └── styles.css
│
├── server.js
├── package.json
├── .gitignore
⚙️ Installation & Setup
Clone the repository
git clone https://github.com/nmonisha2976-hub/codealpha_tasks.git
Install dependencies
npm install
Environment Variables

Create a .env file:

PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
Run the server
node server.js

Server runs at:

http://localhost:5000
📡 API Endpoints
Auth
POST /api/auth/register
POST /api/auth/login
Products
GET /api/products
GET /api/products/:id
Orders
POST /api/orders
🛒 How It Works
User registers / logs in
Products are fetched from backend API
User adds products to cart
Cart stored in LocalStorage
Checkout clears cart
📌 Future Improvements
Payment gateway integration
Admin dashboard
Product image upload
Order history page
Improved UI/UX
👩‍💻 Author

GitHub: https://github.com/nmonisha2976-hub

📄 License

This project is for educational/internship purposes.
