# Full-Stack Task Management Setup Guide

## 🎯 Overview
This guide will help you set up and run the complete full-stack task management application with Next.js frontend and Spring Boot backend.

## 📋 Prerequisites

### Required Software
- **Java 17+** - [Download here](https://adoptium.net/)
- **Node.js 18+** - [Download here](https://nodejs.org/)
- **PostgreSQL 12+** - [Download here](https://www.postgresql.org/download/)
- **Git** - [Download here](https://git-scm.com/)

### Verify Installations
```bash
# Check Java version
java -version

# Check Node.js version
node --version

# Check npm version
npm --version

# Check PostgreSQL
psql --version
```

## 🗄️ Database Setup

### 1. Install PostgreSQL
Follow the installation guide for your operating system:
- **macOS**: Use Homebrew or download from postgresql.org
- **Windows**: Download installer from postgresql.org
- **Linux**: Use package manager (apt, yum, etc.)

### 2. Create Database
```bash
# Connect to PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE task_management;

# Create user (optional)
CREATE USER task_user WITH PASSWORD 'password';
GRANT ALL PRIVILEGES ON DATABASE task_management TO task_user;

# Exit PostgreSQL
\q
```

### 3. Verify Database Connection
```bash
psql -U postgres -d task_management -c "\dt"
```

## ☕ Backend Setup (Spring Boot)

### 1. Navigate to Backend Directory
```bash
cd backend
```

### 2. Update Database Configuration
Edit `src/main/resources/application.properties`:
```properties
# Update these values with your PostgreSQL credentials
spring.datasource.url=jdbc:postgresql://localhost:5432/task_management
spring.datasource.username=postgres
spring.datasource.password=your_password
```

### 3. Build and Run
```bash
# Build the project
mvn clean compile

# Run the application
mvn spring-boot:run
```

### 4. Verify Backend
- Application will start on `http://localhost:8080`
- API documentation: `http://localhost:8080/swagger-ui.html`
- Health check: `http://localhost:8080/actuator/health`

### 5. Test API Endpoints
```bash
# Test the API
curl http://localhost:8080/api/tasks

# Should return an empty array: []
```

## ⚛️ Frontend Setup (Next.js)

### 1. Navigate to Frontend Directory
```bash
cd frontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create `.env.local` file:
```env
NEXT_PUBLIC_API_URL=http://localhost:8080/api
```

### 4. Run Development Server
```bash
npm run dev
```

### 5. Verify Frontend
- Application will be available at `http://localhost:3000`
- Should redirect to tasks page after 2 seconds

## 🚀 Running the Complete Application

### 1. Start Backend First
```bash
cd backend
mvn spring-boot:run
```

Wait for the backend to start completely (you should see "Started TaskManagementApplication" in the logs).

### 2. Start Frontend
```bash
cd frontend
npm run dev
```

### 3. Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8080
- **API Documentation**: http://localhost:8080/swagger-ui.html

## 🧪 Testing the Application

### 1. Create a Task
1. Go to http://localhost:3000
2. Click "New Task" button
3. Fill in the form:
   - Title: "Complete project setup"
   - Description: "Set up the full-stack task management application"
   - Status: "TODO"
   - Priority: "HIGH"
   - Due Date: Select a future date
4. Click "Create Task"

### 2. Test Search and Filtering
1. Create multiple tasks with different statuses and priorities
2. Use the search bar to find tasks
3. Use status and priority filters
4. Test the clear filters functionality

### 3. Test CRUD Operations
1. **Edit**: Click the edit button on any task
2. **Delete**: Click the delete button and confirm
3. **View**: Tasks should display with proper formatting

## 🔧 Troubleshooting

### Common Issues

#### Backend Issues
```bash
# Port already in use
lsof -ti:8080 | xargs kill -9

# Database connection failed
# Check PostgreSQL is running
sudo service postgresql start  # Linux
brew services start postgresql # macOS

# Maven build failed
mvn clean install
```

#### Frontend Issues
```bash
# Port already in use
lsof -ti:3000 | xargs kill -9

# Dependencies issues
rm -rf node_modules package-lock.json
npm install

# API connection failed
# Check backend is running and CORS is configured
```

#### Database Issues
```bash
# PostgreSQL not running
sudo service postgresql start  # Linux
brew services start postgresql # macOS

# Connection refused
# Check PostgreSQL is listening on port 5432
netstat -an | grep 5432
```

### Debug Mode

#### Backend Debug
```bash
# Run with debug logging
mvn spring-boot:run -Dspring-boot.run.jvmArguments="-Dlogging.level.com.example.taskmanagement=DEBUG"
```

#### Frontend Debug
```bash
# Run with verbose logging
DEBUG=* npm run dev
```

## 📊 Monitoring

### Backend Health Checks
```bash
# Health endpoint
curl http://localhost:8080/actuator/health

# Application info
curl http://localhost:8080/actuator/info
```

### Database Monitoring
```bash
# Connect to database
psql -U postgres -d task_management

# Check tables
\dt

# Check data
SELECT * FROM tasks;
SELECT * FROM users;
```

## 🚀 Production Deployment

### Backend Deployment
```bash
# Build JAR file
mvn clean package

# Run JAR file
java -jar target/task-management-api-0.0.1-SNAPSHOT.jar
```

### Frontend Deployment
```bash
# Build for production
npm run build

# Start production server
npm start
```

### Environment Variables for Production
```bash
# Backend
export SPRING_DATASOURCE_URL=jdbc:postgresql://your-db-host:5432/task_management
export SPRING_DATASOURCE_USERNAME=your_username
export SPRING_DATASOURCE_PASSWORD=your_password
export JWT_SECRET=your-secure-secret-key

# Frontend
export NEXT_PUBLIC_API_URL=https://your-api-domain.com/api
```

## 📚 Additional Resources

### Documentation
- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [Next.js Documentation](https://nextjs.org/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

### Development Tools
- **Postman**: API testing
- **pgAdmin**: PostgreSQL GUI
- **VS Code**: Recommended IDE with extensions:
  - Java Extension Pack
  - TypeScript and JavaScript
  - Tailwind CSS IntelliSense

### Learning Resources
- [Spring Boot Tutorial](https://spring.io/guides)
- [Next.js Tutorial](https://nextjs.org/learn)
- [Full-Stack Development](https://www.fullstackopen.com/)

## 🎯 Next Steps

### Enhancements to Consider
1. **Authentication**: Implement JWT authentication
2. **User Management**: Add user registration and login
3. **Real-time Updates**: Add WebSocket support
4. **File Uploads**: Add task attachments
5. **Notifications**: Email/SMS notifications
6. **Advanced Filtering**: Date ranges, multiple statuses
7. **Export/Import**: CSV/Excel functionality
8. **Mobile App**: React Native version

### Interview Preparation
1. **Practice Coding**: Implement additional features
2. **System Design**: Design scalable architecture
3. **Testing**: Add unit and integration tests
4. **Deployment**: Deploy to cloud platforms
5. **Performance**: Optimize database queries and frontend

## 📞 Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Review the logs for error messages
3. Verify all prerequisites are installed
4. Ensure all services are running
5. Check network connectivity between frontend and backend

Happy coding! 🚀 