# Frontend Deployment Guide for Vercel

## Why Vercel for Frontend?
- ✅ Optimized for React/Vue/Next.js applications
- ✅ Automatic deployments from Git
- ✅ Global CDN for fast loading
- ✅ Free tier with generous limits
- ✅ Easy custom domain setup
- ✅ Built-in analytics and performance monitoring

## Prerequisites
- Node.js 18+ installed locally
- Git repository with your code
- Vercel account (free at [vercel.com](https://vercel.com))

## Deployment Steps

### Method 1: Vercel CLI (Recommended)

#### 1. Install Vercel CLI
```bash
npm i -g vercel
```

#### 2. Login to Vercel
```bash
vercel login
```

#### 3. Deploy from Frontend Directory
```bash
cd Frontend
vercel
```

#### 4. Follow the Prompts
- Set up and deploy? **Yes**
- Which scope? (Choose your account)
- Link to existing project? **No**
- What's your project's name? `bookstore-frontend`
- In which directory is your code located? `./`
- Want to override settings? **No**

#### 5. Production Deployment
```bash
vercel --prod
```

### Method 2: Vercel Dashboard (Web Interface)

#### 1. Go to Vercel Dashboard
- Visit [vercel.com/dashboard](https://vercel.com/dashboard)
- Click "New Project"

#### 2. Import Git Repository
- Connect your GitHub/GitLab/Bitbucket account
- Select your repository
- Choose the `Frontend` folder as the root directory

#### 3. Configure Project Settings
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

#### 4. Deploy
- Click "Deploy"
- Wait for the build to complete
- Get your live URL!

## Configuration Files

### vercel.json
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### vite.config.js
- Optimized for Vercel deployment
- Proper base path configuration
- Production build settings

## Environment Variables (Optional)
If you need environment variables:
1. Go to your project in Vercel Dashboard
2. Go to "Settings" → "Environment Variables"
3. Add variables like:
   - `VITE_API_URL=https://bookstore-backend-o7xy.onrender.com`
   - `NODE_ENV=production`

## Custom Domain Setup
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Update your DNS records as instructed
5. SSL certificate is automatically provisioned

## API Configuration
Your frontend is configured to use:
- **Backend URL**: `https://bookstore-backend-o7xy.onrender.com`
- All API endpoints are properly configured
- CORS should be handled by your backend

## Local Testing
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Test production build
npm run build
npm run preview
```

## Troubleshooting

### Build Failures
- Check Node.js version (18+ required)
- Ensure all dependencies are in package.json
- Verify build command works locally

### API Connection Issues
- Verify backend is running and accessible
- Check CORS configuration on backend
- Test API endpoints directly

### Routing Issues
- The `vercel.json` includes SPA routing configuration
- All routes redirect to `index.html` for React Router

## Performance Optimization
- ✅ Automatic code splitting
- ✅ Image optimization
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Gzip compression

## Monitoring & Analytics
- Built-in performance monitoring
- Real-time analytics
- Error tracking
- Core Web Vitals monitoring

## Deployment URLs
After deployment, you'll get:
- **Preview URL**: For testing (changes on every push)
- **Production URL**: Your live site
- **Custom Domain**: If configured

## Next Steps After Deployment
1. Test all functionality
2. Verify API connections
3. Set up custom domain (optional)
4. Configure analytics (optional)
5. Set up monitoring alerts

Your frontend is now ready for Vercel deployment! 🚀
