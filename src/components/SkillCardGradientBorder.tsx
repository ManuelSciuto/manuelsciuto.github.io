import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  label: string;
  svg: ReactNode;
  bgGradient?: string;
  innerRounded?: boolean;
  addPixelRight?: boolean;
}

function SkillCardGradientBorder({
  label,
  svg,
  bgGradient,
  innerRounded = false,
  addPixelRight = false,
}: Props) {
  return (
    <div
      className={twMerge(
        "relative flex w-36 overflow-hidden rounded-md shadow-md shadow-neutral-700",
        bgGradient ?? "",
      )}
    >
      <div
        className={twMerge(
          "absolute top-0.5 left-0.5 flex h-[calc(100%-4px)] flex-col items-center gap-y-2 rounded-md bg-[#232323] p-4 text-lg font-semibold",
          addPixelRight ? "w-[calc(8.75rem-0.5px)]" : "w-35",
        )}
      >
        <div
          className={twMerge(
            "aspect-square grow overflow-hidden",
            innerRounded && "rounded-md",
          )}
        >
          {svg}
        </div>
        <p>{label}</p>
      </div>
    </div>
  );
}

export default SkillCardGradientBorder;
