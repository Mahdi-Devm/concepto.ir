import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="text-center">
        <img src="/404.png" alt="" />
        <p className="mt-4 text-lg text-gray-700 mb-5">
          صفحه مورد نظر شما یافت نشد!
        </p>
        <Link href="/" className="btnnotblue p-2 border-1 rounded-2xl mt-10">
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
}
