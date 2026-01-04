function GlobalMap() {
  return (
    <div className="bg-[#2C2C35] rounded-[30px] h-full min-h-[300px] relative overflow-hidden group cursor-pointer">
      <img
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
        alt="Global Map Background"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
        <h3 className="text-2xl font-bold mb-2 max-w-[80%]">
          Explore global map of wind weather and ocean condition
        </h3>
        <button className="mt-4 bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors">
          GET STARTED
        </button>
      </div>
    </div>
  );
}

export default GlobalMap;
