import SkillCard from "./SkillCard";
import SkillCardGradientBorder from "./SkillCardGradientBorder";
import CSvg from "./svgs/CSvg";
import DartSvg from "./svgs/DartSvg";
import GleamSvg from "./svgs/GleamSvg";
import GoSvg from "./svgs/GoSvg";
import JavaSvg from "./svgs/JavaSvg";
import PhpSvg from "./svgs/PhpSvg";
import PythonSvg from "./svgs/PythonSvg";
import RubySvg from "./svgs/RubySvg";
import RustSvg from "./svgs/RustSvg";
import TsSvg from "./svgs/TSSvg";

function SkillCardContainerNoFrameworks() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-wrap justify-center gap-6">
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
        label="TypeScript"
        svg={<TsSvg className="h-full w-full" />}
        borderColor="border-[#3178C6]"
      />
    </div>
  );
}
export default SkillCardContainerNoFrameworks;
