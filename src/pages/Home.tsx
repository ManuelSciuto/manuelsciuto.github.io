import LangsMarquee from "../components/LangsMarquee";
import MyLinks from "../components/MyLinks";

function HomePage() {
  return (
    <div>
      <div className="mx-auto flex w-7/10 items-center justify-between gap-x-6 py-28">
        <div className="flex flex-col gap-y-6">
          <h1 className="text-5xl font-bold">
            Manuel <span className="text-custom-red">Sciuto</span>
          </h1>
          <p className="text-2xl">
            Software <span className="text-custom-red">Developer</span>
          </p>
          <MyLinks />
        </div>
        <div className="aspect-square max-w-72 flex-grow rounded-full border-2 p-0.5">
          <div className="border-custom-red h-full w-full rounded-full border-2"></div>
        </div>
      </div>
      <LangsMarquee />
    </div>
  );
}
export default HomePage;
