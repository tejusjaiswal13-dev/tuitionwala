# Vercel Deployment Guide

## Quick Deploy to Vercel

### Option 1: Using Vercel Postgres (Recommended)

1. **Push your code to GitHub** ✅ (Already done!)

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Import your GitHub repository: `tejusjaiswal13-dev/tuitionwala`

3. **Add Vercel Postgres**:
   - In your Vercel project dashboard, go to "Storage"
   - Click "Create Database" → "Postgres"
   - Click "Create" (it will auto-configure `DATABASE_URL`)

4. **Add Environment Variables**:
   - Go to "Settings" → "Environment Variables"
   - Add:
     - `ADMIN_USERNAME` = `admin`
     - `ADMIN_PASSWORD` = `your-secure-password`
   - Note: `DATABASE_URL` is already set by Vercel Postgres

5. **Update Prisma Schema**:
   Before deploying, change `prisma/schema.prisma`:
   ```prisma
   datasource db {
     provider = "postgresql"  // Change from "sqlite"
   }
   ```

6. **Deploy**:
   - Vercel will automatically deploy
   - Run migrations in Vercel dashboard terminal or locally:
     ```bash
     npx prisma migrate deploy
     ```

### Option 2: Keep SQLite (Development Only)

If you want to keep SQLite for now (not recommended for production):

1. Use a different database service like:
   - **Turso** (SQLite for production)
   - **PlanetScale** (MySQL)
   - **Supabase** (PostgreSQL)

2. Or deploy to a different platform that supports persistent storage:
   - **Railway**
   - **Render**
   - **DigitalOcean App Platform**

## Current Status

✅ Code pushed to GitHub  
✅ Next.js configuration ready  
✅ Environment variables documented  
⚠️ Need to switch to PostgreSQL for Vercel  

## Next Steps

1. Change database provider in `prisma/schema.prisma` to `postgresql`
2. Import project to Vercel
3. Add Vercel Postgres storage
4. Add environment variables
5. Deploy!
