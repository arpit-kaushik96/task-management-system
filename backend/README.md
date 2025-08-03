# Task Management API - Spring Boot Backend

## 🚀 Overview
A RESTful API built with Spring Boot 3.x for managing tasks. This backend provides comprehensive CRUD operations for tasks with user management, authentication, and advanced querying capabilities.

## 🏗️ Architecture
- **Framework**: Spring Boot 3.2.0
- **Language**: Java 17
- **Database**: PostgreSQL with JPA/Hibernate
- **Security**: Spring Security (configured for development)
- **Documentation**: OpenAPI/Swagger
- **Build Tool**: Maven

## 📋 Features
- ✅ CRUD operations for tasks
- ✅ User management
- ✅ Task filtering by status, priority, and user
- ✅ Search functionality
- ✅ Pagination support
- ✅ Data validation
- ✅ Exception handling
- ✅ API documentation with Swagger
- ✅ CORS configuration for frontend integration

## 🛠️ Prerequisites
- Java 17 or higher
- Maven 3.6+
- PostgreSQL database

## 🚀 Quick Start

### 1. Database Setup
```sql
-- Create database
CREATE DATABASE task_management;

-- Create user (optional)
CREATE USER task_user WITH PASSWORD 'password';
GRANT ALL PRIVILEGES ON DATABASE task_management TO task_user;
```

### 2. Configuration
Update `src/main/resources/application.properties` with your database credentials:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/task_management
spring.datasource.username=your_username
spring.datasource.password=your_password
```

### 3. Run the Application
```bash
# Using Maven
mvn spring-boot:run

# Or build and run
mvn clean package
java -jar target/task-management-api-0.0.1-SNAPSHOT.jar
```

The application will start on `http://localhost:8080`

## 📚 API Documentation

### Swagger UI
Access the interactive API documentation at: `http://localhost:8080/swagger-ui.html`

### API Endpoints

#### Tasks
- `GET /api/tasks` - Get all tasks (with optional pagination)
- `GET /api/tasks/{id}` - Get task by ID
- `GET /api/tasks/user/{userId}` - Get tasks by user
- `GET /api/tasks/status/{status}` - Get tasks by status
- `GET /api/tasks/priority/{priority}` - Get tasks by priority
- `GET /api/tasks/search?keyword={keyword}` - Search tasks
- `GET /api/tasks/overdue` - Get overdue tasks
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/{id}` - Update task
- `DELETE /api/tasks/{id}` - Delete task

#### Request/Response Examples

**Create Task Request:**
```json
{
  "title": "Complete project documentation",
  "description": "Write comprehensive documentation for the task management system",
  "status": "TODO",
  "priority": "HIGH",
  "dueDate": "2024-01-15T10:00:00",
  "assignedToId": 2
}
```

**Task Response:**
```json
{
  "id": 1,
  "title": "Complete project documentation",
  "description": "Write comprehensive documentation for the task management system",
  "status": "TODO",
  "priority": "HIGH",
  "dueDate": "2024-01-15T10:00:00",
  "user": {
    "id": 1,
    "username": "john_doe",
    "email": "john@example.com",
    "name": "John Doe",
    "role": "USER",
    "createdAt": "2024-01-01T09:00:00",
    "updatedAt": "2024-01-01T09:00:00"
  },
  "assignedTo": {
    "id": 2,
    "username": "jane_smith",
    "email": "jane@example.com",
    "name": "Jane Smith",
    "role": "USER",
    "createdAt": "2024-01-01T09:00:00",
    "updatedAt": "2024-01-01T09:00:00"
  },
  "createdAt": "2024-01-01T09:00:00",
  "updatedAt": "2024-01-01T09:00:00"
}
```

## 🗄️ Database Schema

### Users Table
```sql
CREATE TABLE users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'USER',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Tasks Table
```sql
CREATE TABLE tasks (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(20) DEFAULT 'TODO',
    priority VARCHAR(20) DEFAULT 'MEDIUM',
    due_date TIMESTAMP,
    user_id BIGINT,
    assigned_to BIGINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (assigned_to) REFERENCES users(id)
);
```

## 🧪 Testing

### Run Tests
```bash
# Run all tests
mvn test

# Run specific test class
mvn test -Dtest=TaskServiceTest

# Run with coverage
mvn test jacoco:report
```

### Test Coverage
The project includes unit tests for:
- Service layer business logic
- Repository layer data access
- Controller layer API endpoints
- Exception handling

## 🔧 Development

### Project Structure
```
src/main/java/com/example/taskmanagement/
├── TaskManagementApplication.java    # Main application class
├── controller/                       # REST controllers
│   └── TaskController.java
├── service/                         # Business logic
│   └── TaskService.java
├── repository/                      # Data access layer
│   ├── TaskRepository.java
│   └── UserRepository.java
├── entity/                         # JPA entities
│   ├── Task.java
│   └── User.java
├── dto/                           # Data transfer objects
│   ├── TaskDto.java
│   ├── UserDto.java
│   └── CreateTaskRequest.java
├── config/                        # Configuration classes
│   └── SecurityConfig.java
├── security/                      # Security components
└── exception/                     # Custom exceptions
    └── ResourceNotFoundException.java
```

### Adding New Features
1. Create entity classes in `entity/` package
2. Create DTOs in `dto/` package
3. Create repository interfaces in `repository/` package
4. Implement business logic in `service/` package
5. Create REST endpoints in `controller/` package
6. Add unit tests
7. Update API documentation

## 🚀 Deployment

### Docker
```dockerfile
FROM openjdk:17-jdk-slim
COPY target/task-management-api-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]
```

### Environment Variables
```bash
export SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/task_management
export SPRING_DATASOURCE_USERNAME=your_username
export SPRING_DATASOURCE_PASSWORD=your_password
export JWT_SECRET=your-secret-key
```

## 📝 Notes
- This is a development setup with security disabled for easy testing
- In production, implement proper authentication and authorization
- Add logging configuration for production environments
- Consider adding caching for frequently accessed data
- Implement rate limiting for API endpoints

## 🔗 Related Links
- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [Spring Data JPA](https://spring.io/projects/spring-data-jpa)
- [Spring Security](https://spring.io/projects/spring-security)
- [OpenAPI Documentation](https://swagger.io/specification/) 