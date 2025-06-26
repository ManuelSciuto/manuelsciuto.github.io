import HeroVideoDialog from "../components/magicui/hero-video-dialog";
import FixedNavbar from "../components/navbar/FixedNavbar";
import MobileMenu from "../components/navbar/MobileMenu";
import { MenuProvider } from "../contexts/MenuContext";
import ScrollDownArrow from "../components/ScrollDownArrow";

function MyselfPage() {
  return (
    <MenuProvider>
      <FixedNavbar />
      <MobileMenu />
      <ScrollDownArrow />
      <>
        <div className="motocross-bg flex h-screen w-full items-center justify-center">
          <div className="flex justify-center gap-x-4">
            <div className="bg-custom-black shadow-custom-black flex aspect-[8/9] w-1/4 flex-col px-5 py-3 shadow-2xl">
              <h1 className="text-2xl font-semibold">Motocross</h1>
            </div>
            <div className="relative w-1/2">
              <HeroVideoDialog
                className="shadow-custom-black aspect-video w-full shadow-2xl"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                thumbnailAlt="Video Motocross"
              />
            </div>
          </div>
        </div>
        <div className="chess-bg flex h-screen w-full items-center justify-center">
          <div className="bg-custom-black shadow-custom-black flex aspect-video w-1/2 flex-col rounded-lg px-5 py-3 shadow-2xl"></div>
        </div>
        <div className="chess-bg flex h-screen w-full items-center justify-center">
          <div className="bg-custom-black shadow-custom-black flex aspect-video w-1/2 flex-col rounded-lg px-5 py-3 shadow-2xl"></div>
        </div>
      </>
    </MenuProvider>
  );
}
export default MyselfPage;
