import {
  FaChartLine,
  FaShoppingCart,
  FaMoneyBill,
  FaNewspaper,
  FaGraduationCap,
  FaHeartbeat,
} from "react-icons/fa";

const categories = [
  { name: "تکنولوژی", count: 250, icon: <FaChartLine /> },
  { name: "فروشگاه آنلاین", count: 180, icon: <FaShoppingCart /> },
  { name: "خدمات مالی", count: 120, icon: <FaMoneyBill /> },
  { name: "رسانه", count: 90, icon: <FaNewspaper /> },
  { name: "آموزش", count: 150, icon: <FaGraduationCap /> },
  { name: "سلامت", count: 100, icon: <FaHeartbeat /> },
];

export default function Categories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">دسته‌بندی‌ها</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="text-blue-600 text-2xl mb-4">{category.icon}</div>
              <h3 className="font-semibold mb-2">{category.name}</h3>
              <p className="text-gray-600">{category.count} شرکت</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
