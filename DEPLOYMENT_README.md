# 🚀 Task Management System - Deployment Guide

This guide will help you deploy your Task Management System to showcase in your portfolio.

## 📋 Prerequisites

- GitHub account
- Railway account (free tier available)
- Vercel account (free tier available)
- Git installed on your machine

## 🎯 Quick Start

1. **Run the deployment script:**
   ```bash
   ./deploy.sh
   ```

2. **Follow the step-by-step instructions below**

## 📦 Step-by-Step Deployment

### Step 1: Prepare Your Repository

Ensure your code is committed to GitHub:

```bash
git add .
git commit -m "Prepare for deployment"
git push origin main
```

### Step 2: Deploy Backend to Railway

1. **Go to Railway Dashboard**
   - Visit [railway.app](https://railway.app)
   - Sign up/Login with GitHub

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

3. **Configure Backend**
   - Set **Root Directory** to: `backend`
   - Railway will auto-detect it's a Java project

4. **Add PostgreSQL Database**
   - In your Railway project dashboard
   - Click "New" → "Database" → "PostgreSQL"
   - Copy the connection details

5. **Set Environment Variables**
   In your Railway project settings, add:
   ```
   DATABASE_URL=jdbc:postgresql://your-railway-postgres-url
   DATABASE_USERNAME=your-username
   DATABASE_PASSWORD=your-password
   JWT_SECRET=your-super-secure-jwt-secret-key-here
   SPRING_PROFILES_ACTIVE=prod
   ```

6. **Deploy**
   - Railway will automatically build and deploy
   - Wait for deployment to complete
   - Copy your backend URL (e.g., `https://your-app.railway.app`)

### Step 3: Deploy Frontend to Vercel

1. **Go to Vercel Dashboard**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub

2. **Create New Project**
   - Click "New Project"
   - Import your GitHub repository

3. **Configure Frontend**
   - Set **Root Directory** to: `frontend`
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

4. **Set Environment Variables**
   Add this environment variable:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-url.railway.app/api
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Copy your frontend URL (e.g., `https://your-app.vercel.app`)

### Step 4: Test Your Deployment

1. **Test Backend API**
   - Visit: `https://your-backend-url.railway.app/swagger-ui.html`
   - Test the API endpoints

2. **Test Frontend**
   - Visit: `https://your-frontend-url.vercel.app`
   - Test all features:
     - User registration/login
     - Create/edit/delete tasks
     - Search and filter tasks
     - Responsive design

## 🔧 Troubleshooting

### Backend Issues

**Build Fails:**
```bash
# Check Java version
java -version

# Clean and rebuild
cd backend
./mvnw clean package -DskipTests
```

**Database Connection Issues:**
- Verify environment variables in Railway
- Check PostgreSQL connection string format
- Ensure database is created and accessible

**CORS Issues:**
- Verify CORS configuration in `application-prod.properties`
- Check if frontend URL is allowed

### Frontend Issues

**Build Fails:**
```bash
# Check Node.js version
node --version

# Clean and rebuild
cd frontend
rm -rf .next
npm install
npm run build
```

**API Connection Issues:**
- Verify `NEXT_PUBLIC_API_URL` environment variable
- Check if backend is running
- Test API endpoints directly

## 📊 Performance Optimization

### Backend Optimization
- Database connection pooling
- Caching with Redis (optional)
- API response compression
- Query optimization

### Frontend Optimization
- Image optimization
- Code splitting
- Lazy loading
- CDN usage

## 🎨 Portfolio Presentation

### Screenshots to Take:
1. **Homepage** - Full desktop view
2. **Task List** - With sample tasks
3. **Task Creation** - Form interface
4. **Mobile View** - Responsive design
5. **API Documentation** - Swagger UI
6. **User Dashboard** - Admin features

### Demo Video Script:
```
1. Introduction (30 seconds)
   - "This is my Task Management System built with Next.js and Spring Boot"

2. Features Demo (2 minutes)
   - User authentication
   - CRUD operations
   - Search and filtering
   - Responsive design
   - Real-time updates

3. Technical Highlights (1 minute)
   - Modern tech stack
   - Clean architecture
   - Performance optimization
   - Security features

4. Conclusion (30 seconds)
   - "This demonstrates my full-stack development skills"
   - Call to action
```

## 🔗 Useful Links

### Deployment Platforms:
- [Railway Documentation](https://docs.railway.app)
- [Vercel Documentation](https://vercel.com/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs)

### Testing Tools:
- [Postman](https://www.postman.com) - API testing
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance testing
- [GTmetrix](https://gtmetrix.com) - Speed testing

## 📈 Next Steps

After successful deployment:

1. **Add to Portfolio**
   - Update your Upwork profile
   - Add live demo links
   - Include screenshots and video

2. **Monitor Performance**
   - Set up uptime monitoring
   - Track user analytics
   - Monitor error logs

3. **Continuous Improvement**
   - Add new features
   - Optimize performance
   - Update dependencies

## 🎯 Success Checklist

- [ ] Backend deployed and accessible
- [ ] Frontend deployed and accessible
- [ ] Database connected and working
- [ ] All features tested and functional
- [ ] Screenshots taken for portfolio
- [ ] Demo video created
- [ ] Links added to Upwork profile
- [ ] Performance optimized
- [ ] Documentation updated

## 🆘 Need Help?

If you encounter issues:

1. Check the troubleshooting section above
2. Review Railway and Vercel documentation
3. Test locally first before deploying
4. Check environment variables carefully
5. Verify all URLs and endpoints

Remember: A working demo is worth 1000 screenshots! Make sure everything is functional before adding to your portfolio. 