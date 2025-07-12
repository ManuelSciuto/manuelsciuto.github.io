import SkillCard from "../components/SkillCard";
import SkillCardGradientBorder from "../components/SkillCardGradientBorder";
import AngularSvg from "../components/svgs/AngularSvg";
import CSvg from "../components/svgs/CSvg";
import DartSvg from "../components/svgs/DartSvg";
import FastAPISvg from "../components/svgs/FastAPISvg";
import FlaskSvg from "../components/svgs/FlaskSvg";
import FlutterSvg from "../components/svgs/FlutterSvg";
import GinSvg from "../components/svgs/GinSvg";
import GleamSvg from "../components/svgs/GleamSvg";
import GoSvg from "../components/svgs/GoSvg";
import JavaSvg from "../components/svgs/JavaSvg";
import LaravelSvg from "../components/svgs/LaravelSvg";
import NextSvg from "../components/svgs/NextSvg";
import PhpSvg from "../components/svgs/PhpSvg";
import PythonSvg from "../components/svgs/PythonSvg";
import ReactSvg from "../components/svgs/ReactSvg";
import RubySvg from "../components/svgs/RubySvg";
import RustSvg from "../components/svgs/RustSvg";
import SpringBootSvg from "../components/svgs/SpringBootSvg";
import SvelteSvg from "../components/svgs/SvelteSvg";
import TauriSvg from "../components/svgs/TauriSvg";
import TsSvg from "../components/svgs/TSSvg";

function SkillsPage() {
  const aaa = [
    //"angular",
    //"c/c++",
    //"dart",
    //"fastapi",
    //"flask",
    //"flutter",
    //"gin",
    //"gleam",
    //"go",
    //"java",
    //"javascript/ts",
    //"laravel",
    //"next.js",
    //"php",
    //"python",
    //"react",
    //"ruby",
    //"rust",
    //"spring boot",
    "svelte",
    "tauri",
  ];

  return (
    <div className="p-8 pb-10">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap justify-center gap-6">
        <SkillCardGradientBorder
          label="Angular"
          svg={<AngularSvg className="h-full w-full" />}
          bgGradient="bg-gradient-to-bl from-[#9719EF] to-[#EC1757]"
          addPixelRight
        />
        <SkillCard
          label="C/C++"
          svg={<CSvg className="h-full w-full" />}
          borderColor="border-[#01599C]"
        />
        <SkillCardGradientBorder
          label="Dart"
          svg={<DartSvg className="h-full w-full" />}
          bgGradient="bg-gradient-to-bl from-[#05589C] to-[#42C4FF]"
          addPixelRight
        />
        <SkillCard
          label="FastAPI"
          svg={<FastAPISvg className="h-full w-full" />}
          borderColor="border-[#059688]"
        />
        <SkillCard
          label="Flask"
          svg={<FlaskSvg className="h-full w-full" />}
          borderColor="border-[#8DC6E0]"
        />
        <SkillCard
          label="Flutter"
          svg={<FlutterSvg className="h-full w-full" />}
          borderColor="border-[#31BAF6]"
        />
        <SkillCardGradientBorder
          label="Gin"
          svg={<GinSvg className="h-full w-full" />}
          bgGradient="bg-gradient-to-bl from-[#F6D91D] to-[#0290D1]"
          addPixelRight
        />
        <SkillCard
          label="Gleam"
          svg={<GleamSvg className="h-full w-full" />}
          borderColor="border-[#FFAFF3]"
        />
        <SkillCard
          label="Golang"
          svg={<GoSvg className="h-full w-full" />}
          borderColor="border-[#02A9D2]"
        />
        <SkillCardGradientBorder
          label="Java"
          svg={<JavaSvg className="h-full w-full" />}
          bgGradient="bg-gradient-to-b from-[#E76F00] to-[#5382A1]"
        />
        <SkillCard
          label="Laravel"
          svg={<LaravelSvg className="h-full w-full" />}
          borderColor="border-[#FF2D20]"
        />
        <SkillCard
          label="Next.js"
          svg={<NextSvg className="h-full w-full" />}
          borderColor="border-neutral-300"
        />
        <SkillCard
          label="PHP"
          svg={<PhpSvg className="h-full w-full" />}
          borderColor="border-[#777BB3]"
        />
        <SkillCardGradientBorder
          label="Python"
          svg={<PythonSvg className="h-full w-full" />}
          bgGradient="bg-gradient-to-br from-[#0477BD] to-[#FFC107]"
        />
        <SkillCard
          label="React"
          svg={<ReactSvg className="h-full w-full" />}
          borderColor="border-[#58C4DC]"
        />
        <SkillCardGradientBorder
          label="Ruby"
          svg={<RubySvg className="h-full w-full" />}
          bgGradient="bg-gradient-to-br from-[#B41307] to-[#930C04]"
          addPixelRight
        />
        <SkillCard
          label="Rust"
          svg={<RustSvg className="h-full w-full" />}
          borderColor="border-[#784125]"
        />
        <SkillCard
          label="Spring boot"
          svg={<SpringBootSvg className="h-full w-full" />}
          borderColor="border-[#6DB33F]"
        />
        <SkillCard
          label="Svelte"
          svg={<SvelteSvg className="h-full w-full" />}
          borderColor="border-[#FF3F00]"
        />
        <SkillCardGradientBorder
          label="Tauri"
          svg={<TauriSvg className="h-full w-full" />}
          bgGradient="bg-gradient-to-bl from-[#FFC131] to-[#24C8DB]"
        />
        <SkillCard
          label="TypeScript"
          svg={<TsSvg className="h-full w-full" />}
          borderColor="border-[#3178C6]"
        />
      </div>
    </div>
  );
}
export default SkillsPage;
