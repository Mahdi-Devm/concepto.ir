import Image from "next/image";

const Logo = () => (
  <div className="flex justify-center">
    <Image
      src="/logo/logo.png"
      alt="Logo"
      width={200}
      height={50}
      className="w-full h-auto "
    />
  </div>
);

export default Logo;
