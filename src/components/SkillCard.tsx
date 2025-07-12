import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  label: string;
  svg: ReactNode;
  borderColor?: string;
  innerRounded?: boolean;
}

function SkillCard({ label, svg, borderColor, innerRounded = false }: Props) {
  return (
    <div
      className={twMerge(
        "flex w-36 flex-col items-center gap-y-2 rounded-md border-2 bg-[#232323] p-4 text-lg font-semibold shadow-lg shadow-neutral-800",
        borderColor ?? "",
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
  );
}
export default SkillCard;
