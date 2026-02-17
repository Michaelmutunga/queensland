# Deployment Guide - Queensland Nuts Website

This guide walks through deploying the Queensland Nuts website to Vercel with a custom domain.

## Prerequisites

- GitHub account
- Vercel account (free)
- Custom domain purchased (optional, but recommended)
- Formspree account for forms

## Step 1: Prepare Your Code

### 1.1 Ensure all files are in place
```bash
cd c:\Users\808ni\queensland
npm install
npm run build  # Test that build works
```

### 1.2 Update Environment Variables
Create `.env.production` (or update `.env.local`):
```
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id_here
NEXT_PUBLIC_GA_ID=your_google_analytics_id  # optional
```

## Step 2: Setup Formspree

### 2.1 Create Formspree Account
1. Go to https://formspree.io
2. Sign up with email
3. Create a new form
4. Copy your form ID (e.g., `xpznqwer`)

### 2.2 Get Form Settings
1. In Formspree dashboard, configure email notifications
2. Set recipient email to: `issac@queenslandnuts.com`
3. Enable all form fields you need

## Step 3: Push to GitHub

### 3.1 Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit - Queensland Nuts website"
```

### 3.2 Create GitHub Repository
1. Go to https://github.com/new
2. Create repository: `queensland-nuts` (or similar)
3. Do NOT initialize with README
4. Copy the push commands

### 3.3 Push Code
```bash
git remote add origin https://github.com/yourusername/queensland-nuts.git
git branch -M main
git push -u origin main
```

## Step 4: Deploy to Vercel

### 4.1 Connect to Vercel
1. Go to https://vercel.com
2. Sign in (or create account)
3. Click "Add New..." → "Project"
4. Select "Import Git Repository"
5. Find and select `queensland-nuts` repo
6. Click "Import"

### 4.2 Configure Project Settings
1. **Framework Preset:** Next.js (auto-detected)
2. **Root Directory:** ./
3. **Node Version:** 18.x or higher
4. Leave other settings as default

### 4.3 Set Environment Variables
1. In Vercel dashboard → Project Settings → Environment Variables
2. Add these variables:
```
NEXT_PUBLIC_FORMSPREE_ID = your_formspree_id
NEXT_PUBLIC_GA_ID = (optional)
```
3. Click "Add" for each variable

### 4.4 Deploy
1. Click "Deploy"
2. Wait for build to complete (2-5 minutes)
3. Once deployed, you'll get a Vercel URL: `https://queensland-nuts.vercel.app`
4. Click the URL to preview

## Step 5: Setup Custom Domain

### 5.1 Purchase Domain
- Recommended registrars: Namecheap, GoDaddy, Google Domains
- Search for: `queenslandnuts.com` (or your chosen domain)
- Purchase for at least 1 year

### 5.2 Connect Domain to Vercel
1. In Vercel dashboard → Project Settings → Domains
2. Click "Add Domain"
3. Enter: `queenslandnuts.com`
4. Choose how you want to add it:
   - **Option A: Vercel Nameservers** (easiest)
     - Vercel will give you nameservers
     - Update nameservers at your registrar
     - Takes 24-48 hours to propagate
   
   - **Option B: CNAME Records** (if keeping registrar's nameservers)
     - Add CNAME record from registrar
     - Point to `cname.vercel-dns.com`

### 5.3 Verify Domain Setup
1. After DNS propagates, return to Vercel
2. Click "Verify"
3. You should see "Valid Configuration"
4. SSL certificate will auto-generate

### 5.4 Redirect www to non-www (optional)
Add another domain in Vercel: `www.queenslandnuts.com`
Vercel will auto-redirect to main domain

## Step 6: Post-Deployment Checklist

- [ ] Visit https://queenslandnuts.com in browser
- [ ] Test all navigation links
- [ ] Test contact form submission
- [ ] Test quote form submission
- [ ] Check mobile responsiveness
- [ ] Verify images load correctly
- [ ] Check Lighthouse Score (Tools > Lighthouse)
  - Should be 90+ in all categories
- [ ] Test on multiple browsers

## Step 7: Email & Updates

### 7.1 Email Notifications
1. In Vercel dashboard → Integrations
2. Setup deployment notifications
3. Emails sent to vercel account

### 7.2 Form Submissions
1. Forms go directly to Formspree
2. Formspree sends to: `issac@queenslandnuts.com`
3. Can setup Formspree notifications in dashboard

### 7.3 Updates & Deployments
To update the website:
```bash
# Make changes locally
git add .
git commit -m "Update: fix typo in about page"
git push origin main
# Vercel automatically redeploys!
```

## Step 8: Setup Analytics (Optional)

### 8.1 Google Analytics
1. Go to https://analytics.google.com
2. Create new property for `queenslandnuts.com`
3. Copy Google Analytics ID (G-XXXXXXXXXX)
4. Add to `.env.production`:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```
5. Redeploy to Vercel

### 8.2 View Analytics
- Wait 24-48 hours for data
- View in Google Analytics dashboard
- Track visitors, page views, bounce rate

## Troubleshooting

### Build Fails
```bash
# Check build locally first
npm run build

# If it fails, check for:
# - Syntax errors in components
# - Missing imports
# - Environment variables not set
```

### Forms Not Submitting
1. Check Formspree ID is correct
2. Verify ID in `.env.production`
3. Restart Vercel deployment
4. Check Formspree dashboard for errors

### Images Not Loading
1. Ensure images in `/public` folder
2. Use relative paths in Image component
3. Check Next.js Image optimization settings

### Domain Not Pointing
1. Wait 24-48 hours for DNS propagation
2. Check DNS settings via: https://mxtoolbox.com
3. Clear browser cache
4. Try incognito/private window

### Performance Issues
1. Check Lighthouse score
2. Optimize images (should be <100KB each)
3. Check for unoptimized components
4. Run `npm run build` and check bundle size

## Rollback Deployment

If something breaks after deployment:

### Option 1: Revert to Previous Version
1. Go to Vercel Deployments page
2. Find the previous working deployment
3. Click the three dots
4. Select "Promote to Production"

### Option 2: Pull from Git
```bash
git log  # Find the commit
git revert <commit-hash>
git push origin main  # Vercel redeploys automatically
```

## Monitoring & Maintenance

### Weekly
- Check form submissions in Formspree
- Review analytics if setup
- Check for broken links

### Monthly
- Update dependencies: `npm update`
- Review and update content
- Test forms and navigation

### Quarterly
- Check security updates: `npm audit`
- Review performance metrics
- Plan new features

## Support & Resources

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Formspree Help:** https://help.formspree.io
- **GitHub:** https://github.com/

## Important Contacts

**Client:**
- Isaac: +254-723-638-417
- Email: issac@queenslandnuts.com

**Service Providers:**
- Vercel Support: support@vercel.com
- Formspree: support@formspree.io

---

**Deployment Date:** February 16, 2026  
**Website URL:** https://queenslandnuts.com  
**Vercel Project:** queensland-nuts  
**Repository:** https://github.com/yourusername/queensland-nuts
