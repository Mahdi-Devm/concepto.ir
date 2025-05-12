import Image from "next/image";
import React from "react";

const images = [
  "/mainpage/card/Card.png",
  "/mainpage/card/Card(1).png",
  "/mainpage/card/Card(2).png",
];

function MainCommunication() {
  return (
    <section className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="flex justify-center items-center">
            <div className="relative w-80 h-56  md:w-100  lg:h-70">
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MainCommunication;
