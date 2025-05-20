export default function SearchBar() {
  return (
    <section className="py-12 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="نام شرکت یا دسته‌بندی را جستجو کنید..."
              className="flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              جستجو
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
