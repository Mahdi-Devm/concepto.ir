import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">تماس با ما</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <FaPhone className="text-3xl text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">تلفن تماس</h3>
              <p className="text-gray-600">021-12345678</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <FaEnvelope className="text-3xl text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">ایمیل</h3>
              <p className="text-gray-600">info@example.com</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <FaMapMarkerAlt className="text-3xl text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">آدرس</h3>
              <p className="text-gray-600">تهران، خیابان ولیعصر</p>
            </div>
          </div>
          <form className="bg-white p-8 rounded-xl shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="نام"
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="ایمیل"
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <textarea
              placeholder="پیام شما"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
            ></textarea>
            <button className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              ارسال پیام
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
