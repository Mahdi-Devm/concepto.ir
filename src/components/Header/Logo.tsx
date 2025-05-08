import Image from "next/image";

const Logo = () => (
  <div className="flex justify-center">
    <Image
      src="/logo/logo.png"
      alt="Logo"
      width={200}
      height={50}
      className="w-auto h-auto sm:w-1/2 md:w-1/3 lg:w-1/6"
    />
  </div>
);

export default Logo;
