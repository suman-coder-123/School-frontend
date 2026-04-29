export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1588072432836-e10032774350",
    "https://images.unsplash.com/photo-1596495577886-d920f1fb7238",
    "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b",
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b",
    "https://images.unsplash.com/photo-1577896851231-70ef18881754",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7",
  ];

  return (
    <div className="px-4 md:px-10 py-16 bg-[#F8FAFC]" id="gallery">

      {/* TITLE */}
      <div className="text-center mb-10">
        <p className="text-blue-600 font-semibold">GALLERY</p>
        <h1 className="text-2xl md:text-3xl font-bold">
          Moments from Our Campus
        </h1>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          A glimpse into school life and activities
        </p>
      </div>

      {/* IMAGE GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl"
          >
            <img
              src={`${img}?w=600`}
              alt="school"
              className="w-full h-48 md:h-60 object-cover hover:scale-110 transition duration-300"
            />
          </div>
        ))}
      </div>

    </div>
  );
}