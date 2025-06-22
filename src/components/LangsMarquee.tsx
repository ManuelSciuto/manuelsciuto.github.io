import { Marquee } from "./magicui/marquee";

const langs = [
  "C/C++",
  "Dart",
  "Gleam",
  "Go",
  "Java",
  "Javascript/TS",
  "PHP",
  "Python",
  "Ruby",
  "Rust",
];

function LangsMarquee() {
  return (
    <div className="relative">
      <Marquee className="[--duration:20s] [--gap:0px]">
        {langs.map((lang) => (
          <div className="bg-custom-gray border-custom-white hover:bg-custom-gray-hover mr-2 rounded-md border-r-2 border-b-2 px-6 py-3 text-lg font-medium shadow-sm transition-colors">
            {lang}
          </div>
        ))}
      </Marquee>
      <div className="from-custom-black pointer-events-none absolute inset-y-0 left-0 w-1/5 min-w-8 bg-gradient-to-r"></div>
      <div className="from-custom-black pointer-events-none absolute inset-y-0 right-0 w-1/5 min-w-8 bg-gradient-to-l"></div>
    </div>
  );
}
export default LangsMarquee;
