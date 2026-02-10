# TuitionWala - Professional Tuition Website

A modern, full-stack website for TuitionWala, a private tuition organization in Prayagraj, India.

## 🚀 Features

- **Professional Landing Page** with hero section and services showcase
- **About Us Page** highlighting organization values and benefits
- **Contact/Enquiry Form** with database storage
- **Admin Dashboard** to view all enquiries
- **Secure Admin Authentication** with cookie-based sessions
- **Mobile Responsive Design** with modern UI/UX
- **SEO Optimized** with proper meta tags

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Vanilla CSS (CSS Modules)
- **Database**: SQLite with Prisma ORM
- **Authentication**: Cookie-based sessions

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/tejusjaiswal13-dev/tuitionwala.git
cd tuitionwala
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory:
```env
DATABASE_URL="file:./dev.db"
ADMIN_USERNAME="admin"
ADMIN_PASSWORD="your-secure-password"
```

4. Set up the database:
```bash
npx prisma generate
npx prisma migrate dev
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📱 Pages

- **Home** (`/`) - Landing page with hero and services
- **About** (`/about`) - Organization information
- **Contact** (`/contact`) - Enquiry form
- **Admin Login** (`/admin/login`) - Admin authentication
- **Admin Dashboard** (`/admin`) - View all enquiries

## 🔐 Admin Access

Default credentials (change in `.env`):
- **Username**: admin
- **Password**: password123

## 📍 Business Information

**TuitionWala**  
Side of Sai Vihar Apartment,  
Church Lane, Tagore Town  
Holly Trinity School Road Front  
Near K K Nursery School  
Prayagraj, Uttar Pradesh - 211002  

**Phone**: +91 81828 37919

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Manual Deployment

```bash
npm run build
npm start
```

## 📝 Database Schema

```prisma
model Enquiry {
  id           Int      @id @default(autoincrement())
  name         String
  phone        String
  studentClass String
  board        String
  tuitionType  String
  locality     String
  createdAt    DateTime @default(now())
}
```

## 🔧 Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npx prisma studio` - Open database GUI

## 📄 License

This project is private and proprietary to TuitionWala.

## 👨‍💻 Developer

Built with ❤️ for TuitionWala, Prayagraj
