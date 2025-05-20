import Image from "next/image";

const teamMembers = [
  {
    name: "علی محمدی",
    role: "مدیرعامل",
    image: "/team/1.jpg",
  },
  {
    name: "سارا احمدی",
    role: "مدیر فنی",
    image: "/team/2.jpg",
  },
  {
    name: "محمد رضایی",
    role: "مدیر محصول",
    image: "/team/3.jpg",
  },
  {
    name: "زهرا کریمی",
    role: "مدیر بازاریابی",
    image: "/team/4.jpg",
  },
];

export default function Team() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">تیم ما</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
