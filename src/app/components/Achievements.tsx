import { FaTrophy, FaUsers, FaProjectDiagram, FaAward } from "react-icons/fa";

const achievements = [
  {
    icon: <FaTrophy className="text-4xl text-blue-600" />,
    title: "پروژه‌های موفق",
    value: "500+",
  },
  {
    icon: <FaUsers className="text-4xl text-blue-600" />,
    title: "مشتریان راضی",
    value: "1000+",
  },
  {
    icon: <FaProjectDiagram className="text-4xl text-blue-600" />,
    title: "سال تجربه",
    value: "10+",
  },
  {
    icon: <FaAward className="text-4xl text-blue-600" />,
    title: "جوایز کسب شده",
    value: "50+",
  },
];

export default function Achievements() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">دستاوردهای ما</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm text-center"
            >
              <div className="mb-4">{achievement.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {achievement.value}
              </h3>
              <p className="text-gray-600">{achievement.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
