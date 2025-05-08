# کانسپتو - پلتفرم معرفی استارتاپ‌ها و شرکت‌ها

**کانسپتو** یک پلتفرم آنلاین است که به استارتاپ‌ها و شرکت‌ها کمک می‌کند تا در یک بستر امن و معتبر اطلاعات و اخبار خود را به اشتراک بگذارند. این پلتفرم شامل بخش‌هایی برای مشاهده و جستجوی شرکت‌ها، مشاهده شغل‌ها، مدیریت پروفایل کاربران و ویژگی‌های دیگری است که به شرکت‌ها و کاربران کمک می‌کند تعامل بیشتری با یکدیگر داشته باشند.

## ویژگی‌ها:
- **ثبت‌نام و ورود کاربران**: قابلیت ورود یا ثبت‌نام کاربران با استفاده از **NextAuth** و **React Hook Form**.
- **لیست شرکت‌ها و جزئیات آن‌ها**: نمایش شرکت‌ها و جزئیات آن‌ها همراه با قابلیت جستجو و فیلتر کردن.
- **فرصت‌های شغلی**: نمایش آگهی‌های شغلی و امکان جستجو و فیلتر آن‌ها.
- **مدیریت پروفایل**: امکان ویرایش اطلاعات پروفایل کاربر.
- **SEO بهینه‌شده**: استفاده از قابلیت‌های SEO در **Next.js** برای بهبود رتبه سایت در موتورهای جستجو.
- **ویژگی‌های امنیتی**: رعایت نکات امنیتی مانند ولیدیشن داده‌ها، جلوگیری از حملات XSS و CSRF.

## تکنولوژی‌ها و ابزارهای استفاده شده:
- **React**: برای ایجاد رابط کاربری و مدیریت وضعیت.
- **Next.js 15**: فریم‌ورک برای رندرینگ سمت سرور، مدیریت مسیرها و API Routes.
- **React Query**: برای مدیریت درخواست‌های API و کش داده‌ها.
- **NextAuth**: برای مدیریت احراز هویت و ثبت‌نام کاربران.
- **RESTful APIs**: برای ارتباط بین بخش‌های فرانت‌اند و بک‌اند.
- **React Hook Form**: برای مدیریت فرم‌ها به طور ساده و با کمترین کد.
- **TypeScript**: برای ارتقاء کیفیت کد و جلوگیری از خطاهای زمان اجرا.
- **Tailwind CSS**: برای استایل‌دهی و طراحی واکنش‌گرا.
- **CSS و SASS**: برای استایل‌دهی پیشرفته و تنظیمات شخصی.
- **Git & GitHub**: برای مدیریت کد و همکاری تیمی.

## بک‌اند:
- **Next.js (Back-end)**: استفاده از **API Routes** در **Next.js** برای پیاده‌سازی بک‌اند و مدیریت درخواست‌ها.
- **Node.js**: برای اجرای بک‌اند.
- **JWT Token**: برای مدیریت احراز هویت با استفاده از **NextAuth** و **JWT**.

## نصب و راه‌اندازی پروژه:

### پیش‌نیازها:
1. **Node.js** (نسخه 14 به بالا)
2. **npm** یا **yarn**

### مراحل نصب:
1. این پروژه را از گیت‌هاب کلون کنید:
    ```bash
    git clone https://github.com/Mahdi-Devm/concepto.git
    ```

2. وارد پوشه پروژه شوید:
    ```bash
    cd project-name
    ```

3. بسته‌های مورد نیاز را نصب کنید:
    با استفاده از npm:
    ```bash
    npm install
    ```
    یا با استفاده از yarn:
    ```bash
    yarn install
    ```

4. پروژه را اجرا کنید:
    ```bash
    npm run dev
    ```
    یا:
    ```bash
    yarn dev
    ```

5. حالا پروژه را در مرورگر خود در آدرس `http://localhost:3000` مشاهده کنید.

## ساختار پروژه به صورت کلی (دقیقا ساختار این نیست , این ساختار برای آشنا شما ایجاد شده ):

```plaintext
/src
  ├── /features
  │    ├── /auth
  │    │    ├── AuthContext.tsx
  │    │    ├── AuthProvider.tsx
  │    │    ├── LoginPage.tsx
  │    │    └── SignupPage.tsx
  │    ├── /companies
  │    │    ├── CompanyList.tsx
  │    │    ├── CompanyDetails.tsx
  │    │    ├── CompanyCard.tsx
  │    │    └── CompanyService.ts
  │    ├── /jobs
  │    │    ├── JobList.tsx
  │    │    ├── JobDetails.tsx
  │    │    └── JobService.ts
  │    ├── /search
  │    │    ├── SearchBar.tsx
  │    │    ├── SearchResults.tsx
  │    │    └── SearchService.ts
  │    ├── /seo
  │    │    ├── SeoMeta.tsx
  │    │    └── SeoHelper.ts
  │    └── /user
  │         ├── Profile.tsx
  │         ├── EditProfile.tsx
  │         └── UserService.ts
  ├── /components
  │    ├── Header.tsx
  │    ├── Footer.tsx
  │    ├── Card.tsx
  │    └── Button.tsx
  ├── /styles
  │    ├── tailwind.config.js
  │    ├── globals.css
  │    └── theme.css
  ├── /hooks
  │    ├── useAuth.ts
  │    ├── useCompany.ts
  │    └── useJob.ts
  ├── /pages
  │    ├── index.tsx
  │    ├── /company
  │    │    ├── index.tsx
  │    │    └── [companyId].tsx
  │    ├── /job
  │    │    ├── index.tsx
  │    │    └── [jobId].tsx
  │    ├── /profile
  │    │    └── index.tsx
  │    ├── _app.tsx
  │    ├── /api
  │    │    ├── auth.ts
  │    │    ├── companies.ts
  │    │    ├── jobs.ts
  │    │    └── user.ts
  ├── /public
  │    ├── /images
  │    └── favicon.ico
  └── /utils
       ├── api.ts
       └── constants.ts
