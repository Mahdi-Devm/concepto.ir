export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  experience: string;
  skills: string[];
  logo: string;
  date: string;
  description: string;
  category: string;
}

export const jobs: Job[] = [
  {
    id: 1,
    title: "توسعه‌دهنده فرانت‌اند",
    company: "شرکت فناوری نوین",
    location: "تهران",
    type: "تمام وقت",
    salary: "توافقی",
    experience: "3 تا 5 سال",
    skills: ["React", "TypeScript", "Next.js"],
    logo: "/images/company1.png",
    date: "1402/12/15",
    description:
      "به دنبال یک توسعه‌دهنده فرانت‌اند با تجربه در React و TypeScript هستیم.",
    category: "توسعه نرم‌افزار",
  },
  {
    id: 2,
    title: "طراح رابط کاربری",
    company: "استودیو طراحی دیجیتال",
    location: "اصفهان",
    type: "پاره وقت",
    salary: "15 تا 20 میلیون",
    experience: "2 تا 4 سال",
    skills: ["Figma", "UI/UX", "Adobe XD"],
    logo: "/images/company2.png",
    date: "1402/12/14",
    description: "به دنبال یک طراح رابط کاربری خلاق و با تجربه هستیم.",
    category: "طراحی",
  },
  {
    id: 3,
    title: "مدیر پروژه نرم‌افزاری",
    company: "گروه نرم‌افزاری پیشرو",
    location: "شیراز",
    type: "تمام وقت",
    salary: "25 تا 35 میلیون",
    experience: "5 تا 8 سال",
    skills: ["PMP", "Agile", "Scrum"],
    logo: "/images/company3.png",
    date: "1402/12/13",
    description:
      "به دنبال یک مدیر پروژه با تجربه در مدیریت پروژه‌های نرم‌افزاری هستیم.",
    category: "مدیریت",
  },
  {
    id: 4,
    title: "متخصص سئو",
    company: "آژانس دیجیتال مارکتینگ",
    location: "مشهد",
    type: "دورکاری",
    salary: "12 تا 18 میلیون",
    experience: "2 تا 5 سال",
    skills: ["SEO", "Google Analytics", "Content Marketing"],
    logo: "/images/company4.png",
    date: "1402/12/12",
    description: "به دنبال یک متخصص سئو با تجربه در بهینه‌سازی سایت‌ها هستیم.",
    category: "بازاریابی",
  },
  {
    id: 5,
    title: "توسعه‌دهنده بک‌اند",
    company: "شرکت نرم‌افزاری آپا",
    location: "تهران",
    type: "تمام وقت",
    salary: "20 تا 30 میلیون",
    experience: "3 تا 6 سال",
    skills: ["Node.js", "Python", "MongoDB"],
    logo: "/images/company5.png",
    date: "1402/12/11",
    description:
      "به دنبال یک توسعه‌دهنده بک‌اند با تجربه در Node.js و Python هستیم.",
    category: "توسعه نرم‌افزار",
  },
  {
    id: 6,
    title: "کارشناس فروش",
    company: "شرکت تجهیزات پزشکی",
    location: "تهران",
    type: "تمام وقت",
    salary: "15 تا 25 میلیون",
    experience: "2 تا 4 سال",
    skills: ["فروش", "مذاکره", "مدیریت مشتری"],
    logo: "/images/company6.png",
    date: "1402/12/10",
    description:
      "به دنبال یک کارشناس فروش با تجربه در فروش تجهیزات پزشکی هستیم.",
    category: "فروش",
  },
  {
    id: 7,
    title: "توسعه‌دهنده موبایل",
    company: "استودیو اپلیکیشن موبایل",
    location: "اصفهان",
    type: "پروژه‌ای",
    salary: "توافقی",
    experience: "3 تا 5 سال",
    skills: ["React Native", "Flutter", "iOS"],
    logo: "/images/company7.png",
    date: "1402/12/09",
    description:
      "به دنبال یک توسعه‌دهنده موبایل با تجربه در React Native و Flutter هستیم.",
    category: "توسعه نرم‌افزار",
  },
];
