import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-[60vh]">
      <Image
        src="/1.jpg"
        alt="Hero Background"
        fill
        className="object-cover rounded-lg"
        priority
      />
      <div className="absolute inset-0 opacity-60"></div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="text-white">
          <h1 className="text-5xl font-bold mb-4">شرکت‌های برتر ایران</h1>
          <p className="text-xl mb-8">معرفی و بررسی بهترین شرکت‌های ایرانی</p>
          <div className="flex gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              جستجوی شرکت‌ها
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              ثبت شرکت
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
