import SkillCard from "./SkillCard";
import SkillCardGradientBorder from "./SkillCardGradientBorder";
import AngularSvg from "./svgs/AngularSvg";
import CSvg from "./svgs/CSvg";
import DartSvg from "./svgs/DartSvg";
import FastAPISvg from "./svgs/FastAPISvg";
import FlaskSvg from "./svgs/FlaskSvg";
import FlutterSvg from "./svgs/FlutterSvg";
import GinSvg from "./svgs/GinSvg";
import GleamSvg from "./svgs/GleamSvg";
import GoSvg from "./svgs/GoSvg";
import JavaSvg from "./svgs/JavaSvg";
import LaravelSvg from "./svgs/LaravelSvg";
import NextSvg from "./svgs/NextSvg";
import PhpSvg from "./svgs/PhpSvg";
import PythonSvg from "./svgs/PythonSvg";
import ReactSvg from "./svgs/ReactSvg";
import RubySvg from "./svgs/RubySvg";
import RustSvg from "./svgs/RustSvg";
import SpringBootSvg from "./svgs/SpringBootSvg";
import SvelteSvg from "./svgs/SvelteSvg";
import TauriSvg from "./svgs/TauriSvg";
import TsSvg from "./svgs/TSSvg";

function SkillCardContainerWithFrameworks() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-wrap justify-center gap-6">
      <SkillCardGradientBorder
        label="Angular"
        svg={<AngularSvg className="h-full w-full" />}
        bgGradient="bg-gradient-to-bl from-[#9719EF] to-[#EC1757]"
        removePixelRight
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
        removePixelRight
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
        removePixelRight
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
        removePixelRight
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
        removePixelRight
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
        removePixelRight
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
        removePixelRight
      />
      <SkillCard
        label="TypeScript"
        svg={<TsSvg className="h-full w-full" />}
        borderColor="border-[#3178C6]"
      />
    </div>
  );
}
export default SkillCardContainerWithFrameworks;
