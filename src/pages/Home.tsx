import LangsMarquee from "../components/LangsMarquee";
import SocialHoverCard from "../components/SocialHoverCard";

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
          <div className="flex gap-2">
            <SocialHoverCard
              imgSrc="codewars.png"
              alt="Codewars"
              link="https://www.codewars.com/users/Manuel393"
              platform="Codewars"
            />

            <SocialHoverCard
              imgSrc="github.png"
              alt="Github"
              link="https://github.com/ManuelSciuto"
              platform="Github"
              triggerDivClass="p-1"
            />
          </div>
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
