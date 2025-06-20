function HomePage() {
  return (
    <div>
      <div className="flex items-center justify-around gap-x-6 px-8 py-28">
        <div className="flex flex-col gap-y-6">
          <h1 className="text-5xl font-bold">
            Manuel <span className="text-custom-red">Sciuto</span>
          </h1>
          <p className="text-2xl">
            Software <span className="text-custom-red">Developer</span>
          </p>
        </div>
        <div className="aspect-square flex-grow rounded-full border-2 p-0.5">
          <div className="border-custom-red h-full w-full rounded-full border-2"></div>
        </div>
      </div>
      <div className="bg-custom-gray h-28 w-full"></div>
    </div>
  );
}
export default HomePage;
