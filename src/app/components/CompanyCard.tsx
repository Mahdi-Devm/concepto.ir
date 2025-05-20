import Image from "next/image";
import { FaUsers } from "react-icons/fa";

interface CompanyCardProps {
  name: string;
  logo: string;
  category: string;
  employees: string;
  description: string;
  achievements: string[];
}

export default function CompanyCard({
  name,
  logo,
  category,
  employees,
  description,
  achievements,
}: CompanyCardProps) {
  return (
    <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="relative w-full h-48 mb-6 bg-white border-1 rounded-xl border-gray-200 overflow-hidden">
          <Image
            src={logo}
            alt={name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-blue-600 mb-4">{category}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center gap-2 text-gray-500 mb-4">
          <FaUsers />
          <span>{employees} کارمند</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {achievements.map((achievement, idx) => (
            <span
              key={idx}
              className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
            >
              {achievement}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
