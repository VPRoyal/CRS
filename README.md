# Complaint Redressal System (CRS)

The Complaint Redressal System (CRS) is a web-based application developed for MNIT Jaipur to facilitate efficient lodging, tracking, and resolution of complaints. The system enhances communication between students and the administration, ensuring timely and effective issue management.

## Table of Contents

- [Features](#features)
- [System Architecture](#system-architecture)
- [Project Structure](#project-structure)
- [Detailed Component Overview](#detailed-component-overview)
  - [Backend (API)](#backend-api)
  - [Frontend (APP)](#frontend-app)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Secure login and registration for students and administrators.
- **Complaint Management**: Users can file new complaints, view status updates, and receive notifications.
- **Administrative Dashboard**: Administrators can view, assign, and update the status of complaints.
- **Responsive Design**: Accessible on various devices, ensuring usability across platforms.

## System Architecture

The CRS follows a client-server architecture:

- **Frontend (Client)**: Developed using HTML, CSS, and JavaScript, the frontend provides an intuitive interface for users to interact with the system.
- **Backend (Server)**: Built with Node.js and Express.js, the backend handles client requests, processes business logic, and communicates with the database.
- **Database**: Manages user information, complaints, and related data, ensuring data integrity and persistence.

## Project Structure

The project is organized as follows:

```bash
CRS/
├── API/                 # Backend application
│   ├── controllers/     # Request handlers
│   ├── models/          # Database schemas
│   ├── routes/          # API endpoints
│   ├── middlewares/     # Middleware functions
│   ├── utils/           # Utility functions
│   ├── config/          # Configuration files
│   └── server.js        # Server setup
├── APP/                 # Frontend application
│   ├── css/             # Stylesheets
│   ├── js/              # JavaScript files
│   ├── views/           # HTML templates
│   └── index.html       # Main HTML file
├── .gitignore           # Git ignore rules
└── README.md            # Project documentation
```

## Detailed Component Overview

### Backend (API)

The backend is responsible for handling client requests, processing business logic, and interacting with the database.

- **Controllers (`API/controllers/`)**:
  - **`authController.js`**: Manages user authentication processes, including login and registration.
  - **`complaintController.js`**: Handles operations related to complaints, such as creation, retrieval, updating, and deletion.

- **Models (`API/models/`)**:
  - **`User.js`**: Defines the schema for user data, including fields like username, password, role, and contact information.
  - **`Complaint.js`**: Defines the schema for complaint data, including fields like title, description, status, and timestamps.

- **Routes (`API/routes/`)**:
  - **`authRoutes.js`**: Defines endpoints for authentication-related operations.
  - **`complaintRoutes.js`**: Defines endpoints for complaint-related operations.

- **Middlewares (`API/middlewares/`)**:
  - **`authMiddleware.js`**: Contains functions to verify user authentication and authorization.

- **Utilities (`API/utils/`)**:
  - **`db.js`**: Manages database connections and configurations.

- **Configuration (`API/config/`)**:
  - **`config.js`**: Stores configuration settings, such as database connection strings and secret keys.

- **Server Setup (`API/server.js`)**:
  - Initializes the Express application, sets up middleware, and starts the server on the specified port.

### Frontend (APP)

The frontend provides the user interface for the application, allowing users to interact with the system seamlessly.

- **CSS (`APP/css/`)**:
  - **`styles.css`**: Contains styles to ensure a consistent and responsive design across the application.

- **JavaScript (`APP/js/`)**:
  - **`main.js`**: Handles client-side logic, including form validations and API calls.

- **Views (`APP/views/`)**:
  - **`index.html`**: The main landing page of the application.
  - **`login.html`**: User login page.
  - **`register.html`**: User registration page.
  - **`dashboard.html`**: User dashboard displaying filed complaints and their statuses.
  - **`admin.html`**: Administrator dashboard for managing complaints.

## Installation and Setup

To set up the project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/VPRoyal/CRS.git
   cd CRS
   ```

2. **Backend Setup**:

   - Navigate to the `API` directory:

     ```bash
     cd API
     ```

   - Install backend dependencies:

     ```bash
     npm install
     ```

   - Configure environment variables:

     - Create a `.env` file in the `API` directory with the following variables:

       ```env
       PORT=5000
       DB_CONNECTION_STRING=your_database_connection_string
       JWT_SECRET=your_jwt_secret
       ```

   - Start the backend server:

     ```bash
     npm start
     ```

     The backend server will run on `http://localhost:5000`.

3. **Frontend Setup**:

   - Navigate to the `APP` directory:

     ```bash
     cd ../APP
     ```

   - Since the frontend consists of static files, ensure you have a live server extension in your code editor or use any static server to serve the files.

   - Open `index.html` in your preferred browser to access the application.

## Usage

- **For Users**:
  - **Registration**: Navigate to the registration page to create a new account.
  - **Login**: Use your credentials to log in.
  - **File a Complaint**: Access the dashboard to file a new complaint.
  - **Track Complaint**: View the status of your filed complaints in the dashboard.

- **For Administrators**:
  - **Login**: Use admin credentials to access the admin dashboard.
  - **Manage Complaints**: View all complaints, assign them to relevant departments, and update their statuses.

## Contributing

Contributions are welcome! To contribute:

1. **Fork the repository**.
2. **Create a new branch**:

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Commit your changes**:

   ```bash
   git commit -m "Add YourFeature"
   ```

4. **Push to the branch**:

   ```bash
   git push origin feature/YourFeature
   ```
   
5. **Open a Pull Request**:  
   - Go to your forked repository on GitHub.
   - Click on the **"New Pull Request"** button.
   - Compare your branch with the `main` branch and submit the pull request for review.

6. **Code Review & Merging**:  
   - Your changes will be reviewed by the maintainers.
   - If necessary, make modifications based on feedback.
   - Once approved, your changes will be merged into the main repository.

## API Endpoints

### Authentication Routes

| Method | Endpoint         | Description                         | Access  |
|--------|-----------------|-------------------------------------|---------|
| POST   | `/auth/register` | Registers a new user               | Public  |
| POST   | `/auth/login`    | Logs in a user and returns a token | Public  |

### Complaint Management Routes

| Method | Endpoint              | Description                                      | Access  |
|--------|----------------------|--------------------------------------------------|---------|
| POST   | `/complaints/new`     | Create a new complaint                          | User    |
| GET    | `/complaints/user`    | Get all complaints of a logged-in user         | User    |
| GET    | `/complaints/admin`   | Get all complaints (for admins)                 | Admin   |
| PATCH  | `/complaints/update/:id` | Update complaint status                     | Admin   |
| DELETE | `/complaints/delete/:id` | Delete a complaint                         | Admin   |

## Tech Stack

### Backend
- **Node.js**: JavaScript runtime for server-side operations.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing user and complaint data.
- **JWT (JSON Web Token)**: Secure authentication and authorization.
- **Mongoose**: ODM for MongoDB schema management.

### Frontend
- **HTML, CSS, JavaScript**: Core web technologies for UI.
- **Bootstrap**: Responsive and modern UI framework.
- **AJAX & Fetch API**: For dynamic data fetching.

### Tools & DevOps
- **Git & GitHub**: Version control and collaboration.
- **Postman**: API testing.
- **Nodemon**: Auto-reloading during development.
- **dotenv**: Manage environment variables securely.

## Security Features

- **Password Hashing**: Ensures secure storage of user passwords using bcrypt.
- **JWT Authentication**: Protects user sessions and API access.
- **Input Validation**: Prevents SQL injection and XSS attacks.
- **Role-Based Access Control (RBAC)**: Restricts access to admin-only features.

## Future Enhancements

- **Notifications System**: Email or SMS notifications for complaint updates.
- **Chat Support**: Real-time chat between users and administrators.
- **Multi-Language Support**: Localization for broader accessibility.
- **File Attachments**: Allow users to upload images or documents for complaints.
- **AI-Powered Analysis**: Automate complaint categorization for faster processing.

## License

This project is licensed under the **MIT License**.  
See the [LICENSE](LICENSE) file for details.

---

### ✨ Developed by [Vinay Pratap Singh](https://github.com/VPRoyal)
