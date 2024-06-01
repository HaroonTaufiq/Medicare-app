# Full Stack Doctor Appointment Booking Website | MERN Stack Project

## Project Overview
This project demonstrates the development of a fully responsive doctor appointment booking website using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Stripe integration for payment processing. The project is designed to cover a wide range of advanced and complex topics, from the basics of setting up the development environment to implementing advanced features like authentication, authorization, and payment gateways.

## Technologies Used
- **Frontend:** React.js (with Vite), Tailwind CSS
- **Backend:** Node.js, Express.js, Nodemon
- **Database:** MongoDB
- **Authentication:** JSON Web Token (JWT)

## Features
1. **User Authentication and Authorization**
   - User registration and login
   - JWT-based authentication for secure access to protected routes

2. **Profile Management**
   - Users can update their profile information
   - Secure access to the account page for managing bookings

3. **Appointment Booking**
   - Browse and book available appointment slots with doctors
   - Protected booking process to ensure only authenticated users can book

4. **Responsive Design**
   - Fully responsive UI for a seamless experience across different devices

## Project Structure
The project is structured into two main directories: `Frontend` for the frontend and `Backend` for the backend.

## Installation and Setup

### Prerequisites
- Node.js (>=14.x)
- MongoDB

### Steps
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/doctor-appointment-booking.git
   cd MEDICARE-APP
   ```

2. **Install dependencies for the client and server**
   ```bash
   cd Frontend
   npm install
   npm run dev 

   cd Backend
   npm install
   nodemon
   ```

3. **Set up environment variables**
   Create a `.env` file in the `Backend` directory and add the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongo_db_connection_string
   JWT_SECRET=your_jwt_secret
   ```
   Create a `.env` file in the `Frontend` directory and add the following:
   ```env
   VITE_UPLOAD_PRESET=your_upload_preset
   VITE_CLOUD_NAME=your_cloud_name
   ```

4. **Run the client and server**
   - Start the Backend:
     ```bash
     cd Backend
     nodemon
     ```
   - Start the Frontend:
     ```bash
     cd Frontend
     npm install
     npm run dev
     ```

5. **Access the application**
   Open your browser and navigate to `http://localhost:5173`
