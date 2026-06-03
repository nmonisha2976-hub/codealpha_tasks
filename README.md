🛒 CodeAlpha E-Commerce Store

A full-stack e-commerce web application built using Node.js, Express, and MongoDB with a simple frontend for browsing products, cart management, and authentication.

🚀 Features
User Registration & Login (JWT Authentication)
Product listing from backend API
Add to Cart & Remove from Cart (LocalStorage)
Checkout flow (basic)
REST API backend with Express
MongoDB database integration
Simple responsive frontend UI
🧰 Tech Stack

Frontend:

HTML
CSS
JavaScript (Vanilla JS)

Backend:

Node.js
Express.js

Database:

MongoDB (Mongoose)

Other Tools:

JWT (Authentication)
dotenv
CORS
📁 Project Structure
CodeAlpha_EcommerceStore/
│
├── config/
├── middleware/
├── models/
├── routes/
├── public/        # Frontend files
├── server.js
├── package.json
├── .gitignore
⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/nmonisha2976-hub/codealpha_tasks.git
2. Move into project folder
cd codealpha_tasks
3. Install dependencies
npm install
4. Create .env file
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/codealpha_store
JWT_SECRET=mysecretkey123
5. Run the server
node server.js

Server will start at:

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
Cart stored in browser (LocalStorage)
Checkout clears cart
📌 Future Improvements
Payment gateway integration
Admin dashboard
Product image upload
Order history page
Improved UI/UX
👩‍💻 Author
GitHub: nmonisha2976-hub
📄 License

This project is for educational/internship purposes.
