# 🚀 Task Management System

A modern, full-stack task management application built with **Next.js 14** frontend and **Java Spring Boot** backend. This project demonstrates modern web development practices and serves as a portfolio piece showcasing full-stack development skills.

## ✨ Features

### 🎯 Core Functionality
- **User Authentication** - JWT-based secure authentication
- **Task CRUD Operations** - Create, read, update, and delete tasks
- **Real-time Updates** - Live task management with instant feedback
- **Advanced Filtering** - Search and filter tasks by status, priority, and text
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile

### 🛠️ Technical Features
- **Type Safety** - Full TypeScript implementation
- **Modern UI/UX** - Clean, intuitive interface with Tailwind CSS
- **Performance Optimized** - Fast loading and smooth user experience
- **API Documentation** - Auto-generated Swagger/OpenAPI documentation
- **Database Integration** - PostgreSQL with JPA/Hibernate ORM
- **Security** - Spring Security with JWT authentication

## 🏗️ Architecture

```
fullstack-learning/
├── frontend/                 # Next.js 14 Application
│   ├── app/                 # App Router structure
│   ├── components/          # Reusable UI components
│   ├── lib/                 # Utilities and configurations
│   └── types/               # TypeScript type definitions
├── backend/                 # Java Spring Boot Application
│   ├── src/main/java/      # Java source code
│   ├── src/main/resources/ # Configuration files
│   └── src/test/           # Unit and integration tests
└── docs/                   # Documentation and guides
```

## 🚀 Tech Stack

### Frontend (Next.js 14)
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **HTTP Client**: Axios
- **Form Handling**: React Hook Form + Zod
- **UI Components**: Custom components with Lucide React icons
- **Build Tool**: npm

### Backend (Java Spring Boot)
- **Framework**: Spring Boot 3.x
- **Language**: Java 17+
- **Database**: PostgreSQL with JPA/Hibernate
- **Security**: Spring Security + JWT
- **Documentation**: OpenAPI/Swagger
- **Testing**: JUnit 5 + Mockito
- **Build Tool**: Maven

## 🎯 Live Demo

- **Frontend**: [Deployed on Vercel](https://your-app.vercel.app)
- **Backend API**: [Deployed on Railway](https://your-app.railway.app)
- **API Documentation**: [Swagger UI](https://your-app.railway.app/swagger-ui.html)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Java 17+
- PostgreSQL
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/task-management-system.git
   cd task-management-system
   ```

2. **Set up the backend**
   ```bash
   cd backend
   ./mvnw spring-boot:run
   ```
   The backend will be available at `http://localhost:8080`

3. **Set up the frontend**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   The frontend will be available at `http://localhost:3000`

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8080
   - API Documentation: http://localhost:8080/swagger-ui.html

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Tasks
- `GET /api/tasks` - Get all tasks (with filtering)
- `POST /api/tasks` - Create new task
- `GET /api/tasks/{id}` - Get task by ID
- `PUT /api/tasks/{id}` - Update task
- `DELETE /api/tasks/{id}` - Delete task

### Users
- `GET /api/users` - Get all users
- `GET /api/users/{id}` - Get user by ID
- `PUT /api/users/{id}` - Update user

## 🎨 Screenshots

### Desktop View
![Desktop View](screenshots/desktop.png)

### Mobile View
![Mobile View](screenshots/mobile.png)

### API Documentation
![API Documentation](screenshots/api-docs.png)

## 🔧 Development

### Backend Development
```bash
cd backend
./mvnw spring-boot:run
```

### Frontend Development
```bash
cd frontend
npm run dev
```

### Running Tests
```bash
# Backend tests
cd backend
./mvnw test

# Frontend tests
cd frontend
npm test
```

## 🚀 Deployment

### Backend Deployment (Railway)
1. Go to [railway.app](https://railway.app)
2. Sign up/Login with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select this repository
5. Set **Root Directory** to: `backend`
6. Add environment variables:
   ```
   DATABASE_URL=jdbc:postgresql://your-railway-postgres-url
   DATABASE_USERNAME=your-username
   DATABASE_PASSWORD=your-password
   JWT_SECRET=your-super-secure-jwt-secret-key-here
   SPRING_PROFILES_ACTIVE=prod
   ```

### Frontend Deployment (Vercel)
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import this repository
5. Set **Root Directory** to: `frontend`
6. Add environment variable:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-url.railway.app/api
   ```

## 📊 Performance Metrics

- **Frontend Bundle Size**: ~159 kB (First Load JS)
- **Backend Response Time**: < 100ms average
- **Database Queries**: Optimized with JPA/Hibernate
- **Mobile Performance**: 95+ Lighthouse score

## 🔒 Security Features

- **JWT Authentication** - Secure token-based authentication
- **CORS Configuration** - Proper cross-origin resource sharing
- **Input Validation** - Comprehensive form validation
- **SQL Injection Protection** - JPA/Hibernate ORM
- **XSS Protection** - React's built-in XSS protection

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Arpit Kaushik**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Portfolio: [Your Portfolio](https://yourportfolio.com)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Spring Boot](https://spring.io/projects/spring-boot) - Java framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Lucide React](https://lucide.dev/) - Icon library
- [Railway](https://railway.app/) - Backend hosting
- [Vercel](https://vercel.com/) - Frontend hosting

---

⭐ **Star this repository if you found it helpful!**
