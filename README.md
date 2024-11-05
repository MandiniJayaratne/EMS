# Employee Management System 🧑‍💼

An Employee Management System built with React and Spring Boot, designed to streamline employee management processes within an organization. This system allows admins to manage employee records through a user-friendly dashboard.

## Features ✨

* **💡Employee Management**: Add, view, update, and delete employee records.
* **💡Dashboard Overview**: Summarizes key metrics and statistics related to employees and departments.
* **💡Email Notifications to Upper Management**: Enables admins to send important updates and notifications about employees directly to upper management, ensuring efficient communication and timely action.
* **💡User Friendly Design**
* 
## Technologies Used 🛠️

* **Frontend**: React.js, CSS/Bootstrap for styling🎨
* **Backend**: Spring Boot, Java for server-side logic🌱
* **Database**: MySQL💾
* **Data Persistence**: Spring Data JPA (Hibernate 6) for ORM⚙️
* **Build Tool**: Maven🔨
* **API Communication**: RESTful API endpoints connecting React and Spring Boot🔗 

## Installation and Setup 🛠️

### Prerequisites

- Node.js and npm
- Java Development Kit (JDK)
- Spring Boot and Maven
- MySQL 

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MandiniJayaratne/EMS.git
   

2. **Backend Setup**:
- Navigate to the backend directory:
     ```bash
     cd ems-backend
     ```
- Configure the database connection:
     
     ```bash
    spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name
     ```
     ```bash
    spring.datasource.username=your_username
     ```
     ```bash
    spring.datasource.password=your_password
     ```

- Run the Spring Boot application
     

3. **Frontend Setup**:
   - Open a new terminal and navigate to the frontend directory:
     ```bash
     cd ../emsreact-Frontend
     cd ems-frontend
     ```

   - Install dependencies:
     ```bash
     npm install
     ```

   - Start the React app:
     ```bash
     npm start
     ```

   


