import Image from "next/image";

export default function Newsletter() {
  return (
    <section className="py-20 relative">
      <Image
        src="/2.png"
        alt="Newsletter Background"
        fill
        className="object-cover rounded-lg"
        priority
      />
      <div className="absolute inset-0"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">در خبرنامه ما عضو شوید</h2>
          <p className="mb-8">
            از آخرین اخبار و فرصت‌های شغلی شرکت‌های برتر باخبر شوید
          </p>
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              عضویت
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
