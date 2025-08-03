#!/bin/bash

echo "🚀 Starting Task Management System Deployment"
echo "=============================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if git is initialized
if [ ! -d ".git" ]; then
    print_error "Git repository not found. Please initialize git first:"
    echo "git init"
    echo "git add ."
    echo "git commit -m 'Initial commit'"
    exit 1
fi

# Check if remote repository is set
if ! git remote get-url origin > /dev/null 2>&1; then
    print_warning "No remote repository found. Please add your GitHub repository:"
    echo "git remote add origin https://github.com/yourusername/your-repo-name.git"
    echo "git push -u origin main"
    echo ""
    read -p "Press Enter to continue after setting up the remote repository..."
fi

print_status "✅ Git repository ready"

# Build backend
print_status "Building backend..."
cd backend
if [ -f "mvnw" ]; then
    chmod +x mvnw
    ./mvnw clean package -DskipTests
else
    print_error "Maven wrapper not found. Please ensure you're in the correct directory."
    exit 1
fi

if [ $? -eq 0 ]; then
    print_status "✅ Backend built successfully"
else
    print_error "❌ Backend build failed"
    exit 1
fi
cd ..

# Build frontend
print_status "Building frontend..."
cd frontend
npm install
npm run build

if [ $? -eq 0 ]; then
    print_status "✅ Frontend built successfully"
else
    print_error "❌ Frontend build failed"
    exit 1
fi
cd ..

echo ""
echo "🎯 Deployment Instructions"
echo "========================"
echo ""
echo "1. BACKEND DEPLOYMENT (Railway):"
echo "   • Go to https://railway.app"
echo "   • Sign up/Login with GitHub"
echo "   • Click 'New Project' → 'Deploy from GitHub repo'"
echo "   • Select your repository"
echo "   • Set Root Directory to: backend"
echo "   • Add environment variables:"
echo "     - DATABASE_URL (from Railway PostgreSQL)"
echo "     - DATABASE_USERNAME"
echo "     - DATABASE_PASSWORD"
echo "     - JWT_SECRET (generate a secure random string)"
echo ""
echo "2. FRONTEND DEPLOYMENT (Vercel):"
echo "   • Go to https://vercel.com"
echo "   • Sign up/Login with GitHub"
echo "   • Click 'New Project'"
echo "   • Import your GitHub repository"
echo "   • Set Root Directory to: frontend"
echo "   • Add environment variable:"
echo "     - NEXT_PUBLIC_API_URL=https://your-backend-url.railway.app/api"
echo ""
echo "3. DATABASE SETUP:"
echo "   • In Railway dashboard, add PostgreSQL database"
echo "   • Copy connection details to environment variables"
echo ""
echo "4. TESTING:"
echo "   • Test backend API at: https://your-backend-url.railway.app/swagger-ui.html"
echo "   • Test frontend at: https://your-frontend-url.vercel.app"
echo ""
echo "📝 Notes:"
echo "• Update the API URL in frontend after backend deployment"
echo "• Test all features after deployment"
echo "• Take screenshots for your portfolio"
echo "• Create a demo video showing the application in action"
echo ""

print_status "🎉 Deployment setup complete! Follow the instructions above to deploy your application." 