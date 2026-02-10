# 🚀 Quick Vercel Deployment Guide for TuitionWala

## ⚡ Fast Track - Deploy in 5 Minutes

### Step 1: Login to Vercel
1. Go to **https://vercel.com**
2. Click **"Login"**
3. Select **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub

---

### Step 2: Import Your Project
1. On Vercel dashboard, click **"Add New..."** → **"Project"**
2. Find `tejusjaiswal13-dev/tuitionwala` in the list
3. Click **"Import"**

---

### Step 3: Configure Project (IMPORTANT!)
Vercel will auto-detect Next.js. You need to add environment variables:

**Click "Environment Variables" and add these 2:**

| Name | Value |
|------|-------|
| `ADMIN_USERNAME` | `admin` |
| `ADMIN_PASSWORD` | `password123` (change this!) |

**Note:** Don't add `DATABASE_URL` yet - we'll do that in the next step.

---

### Step 4: Deploy (First Time)
1. Click **"Deploy"**
2. Wait 1-2 minutes for build to complete
3. ⚠️ It might fail because database is not connected yet - that's OK!

---

### Step 5: Add Database
1. In your project dashboard, click **"Storage"** tab
2. Click **"Create Database"**
3. Select **"Postgres"**
4. Click **"Create"**
5. Vercel will automatically add `DATABASE_URL` to your environment variables

---

### Step 6: Redeploy with Database
1. Go to **"Deployments"** tab
2. Click the **"..."** menu on the latest deployment
3. Click **"Redeploy"**
4. Wait for build to complete

---

### Step 7: Initialize Database Tables
After successful deployment, you need to create the tables:

**Option A: Use Vercel CLI (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Link to your project
vercel link

# Run migration
vercel env pull .env.production
npx prisma migrate deploy
```

**Option B: Manual SQL (Quick)**
1. Go to your Vercel project → **Storage** → Your Postgres database
2. Click **"Data"** → **"Query"**
3. Run this SQL:
```sql
CREATE TABLE "Enquiry" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "studentClass" TEXT NOT NULL,
    "board" TEXT NOT NULL,
    "tuitionType" TEXT NOT NULL,
    "locality" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

---

### ✅ Step 8: Get Your Live Link!
1. Go to your project dashboard
2. You'll see your live URL: **`https://tuitionwala.vercel.app`**
3. Click it to open your live website
4. **Share this link with your client!** 🎉

---

## 🎯 Quick Checklist

- [ ] Login to Vercel with GitHub
- [ ] Import `tejusjaiswal13-dev/tuitionwala` project
- [ ] Add environment variables (ADMIN_USERNAME, ADMIN_PASSWORD)
- [ ] Deploy first time
- [ ] Add Vercel Postgres database
- [ ] Redeploy with database
- [ ] Run database migration (create tables)
- [ ] Test the live website
- [ ] Share link with client!

---

## 🔗 Your Live URL
After deployment, your website will be at:
**`https://tuitionwala.vercel.app`**

(Or a similar URL that Vercel assigns)

---

## ⚠️ Important Notes

1. **Database Migration**: Don't forget Step 7! Without it, the enquiry form won't work.
2. **Admin Password**: Change `password123` to something secure in environment variables.
3. **Custom Domain**: You can add a custom domain later in Settings → Domains.

---

## 🆘 If Something Goes Wrong

**Build Fails?**
- Check the build logs in Vercel
- Make sure all environment variables are set

**Enquiry Form Not Working?**
- Make sure you ran the database migration (Step 7)
- Check that DATABASE_URL is set in environment variables

**Admin Login Not Working?**
- Verify ADMIN_USERNAME and ADMIN_PASSWORD are set correctly
- Try redeploying after adding them

---

## 📞 Need Help?
If you get stuck on any step, let me know which step and what error you're seeing!
