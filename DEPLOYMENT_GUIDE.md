# Deployment Guide for Portfolio Showcase

## 🚀 Deploy Your Task Management System

### Frontend Deployment (Vercel)

#### Step 1: Prepare Frontend for Deployment
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create production build
npm run build

# Test the build locally
npm start
```

#### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Configure build settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

#### Step 3: Environment Variables
Add these environment variables in Vercel:
```
NEXT_PUBLIC_API_URL=https://your-backend-url.railway.app/api
```

### Backend Deployment (Railway)

#### Step 1: Prepare Backend for Deployment
```bash
# Navigate to backend directory
cd backend

# Create Dockerfile
```

Create a `Dockerfile` in the backend directory:
```dockerfile
FROM openjdk:17-jdk-slim

WORKDIR /app

COPY target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
```

#### Step 2: Deploy to Railway
1. Go to [railway.app](https://railway.app)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose your repository
6. Configure deployment:
   - **Root Directory**: `backend`
   - **Build Command**: `./mvnw clean package -DskipTests`
   - **Start Command**: `java -jar target/taskmanagement-0.0.1-SNAPSHOT.jar`

#### Step 3: Environment Variables
Add these in Railway:
```
SPRING_DATASOURCE_URL=jdbc:postgresql://your-db-url
SPRING_DATASOURCE_USERNAME=your-username
SPRING_DATASOURCE_PASSWORD=your-password
SPRING_JPA_HIBERNATE_DDL_AUTO=update
```

### Database Setup (PostgreSQL)

#### Option 1: Railway PostgreSQL
1. In Railway dashboard, click "New"
2. Select "Database" → "PostgreSQL"
3. Copy the connection details
4. Update environment variables

#### Option 2: Supabase (Free Tier)
1. Go to [supabase.com](https://supabase.com)
2. Create new project
3. Get connection string from Settings → Database
4. Update environment variables

### Alternative Deployment Options

#### Frontend Alternatives:
- **Netlify**: Similar to Vercel, great for static sites
- **GitHub Pages**: Free hosting for static sites
- **Firebase Hosting**: Google's hosting solution

#### Backend Alternatives:
- **Render**: Similar to Railway, good free tier
- **Heroku**: Popular platform, has free tier
- **DigitalOcean App Platform**: Reliable and scalable
- **AWS Elastic Beanstalk**: Enterprise-grade

## 📊 Performance Optimization

### Frontend Optimization:
```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['your-domain.com'],
  },
  compress: true,
  poweredByHeader: false,
}

module.exports = nextConfig
```

### Backend Optimization:
```properties
# application.properties
server.compression.enabled=true
server.compression.mime-types=text/html,text/xml,text/plain,text/css,text/javascript,application/javascript,application/json
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=false
logging.level.org.hibernate.SQL=WARN
logging.level.org.hibernate.type.descriptor.sql.BasicBinder=WARN
```

## 🔗 Domain and SSL

### Custom Domain Setup:
1. Purchase domain (Namecheap, GoDaddy, etc.)
2. Configure DNS records:
   - Frontend: CNAME to Vercel
   - Backend: CNAME to Railway
3. Add domain in hosting platform
4. SSL certificate will be auto-generated

### Free Domain Options:
- **Vercel**: `your-project.vercel.app`
- **Railway**: `your-project.railway.app`
- **Netlify**: `your-project.netlify.app`

## 📱 Mobile Testing

### Test Responsive Design:
1. Use Chrome DevTools
2. Test on different screen sizes
3. Check on actual mobile devices
4. Test touch interactions
5. Verify loading times

### Performance Testing:
```bash
# Lighthouse audit
# Run in Chrome DevTools
# Check Core Web Vitals
# Optimize images and assets
```

## 🎨 Portfolio Presentation

### Screenshots to Take:
1. **Homepage**: Full desktop view
2. **Mobile View**: iPhone/Android layout
3. **Task List**: With sample data
4. **Task Creation**: Form interface
5. **User Dashboard**: Admin view
6. **API Documentation**: Swagger UI

### Video Demo Creation:
1. **Screen Recording**: Use Loom or OBS
2. **Script**: Write a 2-3 minute walkthrough
3. **Highlights**: Show key features
4. **Mobile Demo**: Include mobile testing
5. **Performance**: Show loading times

## 🔧 Troubleshooting

### Common Issues:

#### Frontend Deployment Issues:
```bash
# Build errors
npm run build
# Check for TypeScript errors
npx tsc --noEmit
# Clear cache
rm -rf .next
npm run build
```

#### Backend Deployment Issues:
```bash
# Maven build issues
./mvnw clean package
# Check Java version
java -version
# Test locally
java -jar target/taskmanagement-0.0.1-SNAPSHOT.jar
```

#### Database Connection Issues:
```properties
# Test database connection
spring.datasource.url=jdbc:postgresql://localhost:5432/taskmanagement
spring.datasource.username=postgres
spring.datasource.password=password
spring.jpa.hibernate.ddl-auto=create-drop
```

## 📈 Monitoring and Analytics

### Add Analytics:
```javascript
// Google Analytics
// Add to _app.tsx or layout.tsx
import Script from 'next/script'

export default function Layout({ children }) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
      {children}
    </>
  )
}
```

### Performance Monitoring:
- **Vercel Analytics**: Built-in performance monitoring
- **Railway Metrics**: Monitor backend performance
- **Uptime Monitoring**: Use UptimeRobot or Pingdom

## 🎯 Next Steps

### After Deployment:
1. **Test Everything**: Ensure all features work
2. **Update Portfolio**: Add live links
3. **Create Demo Video**: 2-3 minute walkthrough
4. **Write Documentation**: Technical blog post
5. **Share on Social**: LinkedIn, Twitter, GitHub

### Continuous Improvement:
- Monitor performance metrics
- Update dependencies regularly
- Add new features
- Optimize based on usage data
- Gather user feedback

## 🔗 Useful Resources

### Deployment Platforms:
- [Vercel Documentation](https://vercel.com/docs)
- [Railway Documentation](https://docs.railway.app)
- [Netlify Documentation](https://docs.netlify.com)
- [Heroku Documentation](https://devcenter.heroku.com)

### Performance Tools:
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org)
- [GTmetrix](https://gtmetrix.com)
- [PageSpeed Insights](https://pagespeed.web.dev)

### Monitoring Tools:
- [UptimeRobot](https://uptimerobot.com)
- [Pingdom](https://tools.pingdom.com)
- [New Relic](https://newrelic.com)
- [DataDog](https://www.datadoghq.com)

Remember: A live, working demo is worth 1000 screenshots. Make sure your deployed application is fast, reliable, and showcases your best work! 