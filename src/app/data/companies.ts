export interface Company {
  name: string;
  logo: string;
  category: string;
  employees: string;
  description: string;
  achievements: string[];
}

export const topCompanies: Company[] = [
  {
    name: "دیجی‌کالا",
    logo: "/companies/44.jpg",
    category: "فروشگاه آنلاین",
    employees: "1000+",
    description: "بزرگترین فروشگاه آنلاین ایران با تنوع محصولات بالا",
    achievements: [
      "برترین فروشگاه آنلاین",
      "پیشگام در تجارت الکترونیک",
      "بیش از ۱۰ میلیون کاربر فعال",
    ],
  },
  {
    name: "اسنپ",
    logo: "/companies/22.jpg",
    category: "تکنولوژی",
    employees: "500+",
    description: "پیشگام در خدمات درخواست آنلاین و حمل و نقل هوشمند",
    achievements: [
      "برترین اپلیکیشن حمل و نقل",
      "نوآوری در خدمات شهری",
      "پوشش ۳۰ شهر کشور",
    ],
  },
  {
    name: "آپارات",
    logo: "/companies/88.jpg",
    category: "رسانه",
    employees: "300+",
    description: "بزرگترین پلتفرم اشتراک ویدیو در ایران",
    achievements: [
      "پلتفرم برتر اشتراک ویدیو",
      "محتوا محور",
      "بیش از ۵ میلیون ویدیو",
    ],
  },
  {
    name: "تپسی",
    logo: "/companies/55.jpg",
    category: "تکنولوژی",
    employees: "400+",
    description: "سامانه هوشمند حمل و نقل درون‌شهری",
    achievements: ["پیشگام در حمل و نقل هوشمند", "خدمات متنوع", "پوشش سراسری"],
  },
  {
    name: "بانک سامان",
    logo: "/companies/66.webp",
    category: "خدمات مالی",
    employees: "2000+",
    description: "بانک خصوصی پیشرو در خدمات مالی نوین",
    achievements: [
      "بانک برتر دیجیتال",
      "خدمات مالی آنلاین",
      "نوآوری در بانکداری",
    ],
  },
  {
    name: "مایکت",
    logo: "/companies/33.webp",
    category: "تکنولوژی",
    employees: "150+",
    description: "پلتفرم آموزش آنلاین با بیش از ۱۰۰۰ دوره آموزشی",
    achievements: [
      "پلتفرم برتر آموزش آنلاین",
      "بیش از ۵ میلیون دانشجو",
      "دوره‌های معتبر",
    ],
  },
  {
    name: "دکتر ساینا",
    logo: "/companies/100.jpg",
    category: "سلامت",
    employees: "200+",
    description: "پلتفرم مشاوره پزشکی آنلاین",
    achievements: [
      "پیشگام در سلامت دیجیتال",
      "بیش از ۵۰۰۰ پزشک",
      "خدمات ۲۴ ساعته",
    ],
  },
  {
    name: "کافه‌بازار",
    logo: "/companies/11.png",
    category: "تکنولوژی",
    employees: "250+",
    description: "بزرگترین فروشگاه اپلیکیشن موبایل در ایران",
    achievements: [
      "بازار برتر اپلیکیشن",
      "بیش از ۵۰ میلیون کاربر",
      "پشتیبانی از توسعه‌دهندگان",
    ],
  },
  {
    name: "دیوار",
    logo: "/companies/77.webp",
    category: "خدمات آنلاین",
    employees: "300+",
    description: "بزرگترین سایت آگهی‌های رایگان",
    achievements: ["سایت برتر آگهی", "بیش از ۲۰ میلیون آگهی", "پوشش سراسری"],
  },
];
