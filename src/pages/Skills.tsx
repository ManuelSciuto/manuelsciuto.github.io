import { useState } from "react";
import { twMerge } from "tailwind-merge";
import SkillCardContainerWithFrameworks from "../components/SkillCardContainerWithFrameworks";
import SkillCardContainerNoFrameworks from "../components/SkillCardContainerNoFrameworks";

function SkillsPage() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [showFrameworks, setShowFrameworks] = useState(true);

  const handleClick = async () => {
    if (isUpdating) return;
    setIsUpdating(true);
    setShowFrameworks((prev) => !prev);
    await new Promise((resolve) => setTimeout(resolve, 300));
    setIsUpdating(false);
  };

  return (
    <div className="flex flex-col gap-y-6 p-8 pb-10">
      <div className="mx-auto flex w-fit flex-col items-center gap-y-2 text-center">
        <div
          onClick={() => handleClick()}
          className={twMerge(
            "relative flex h-12 w-24 items-center rounded-full border-2 text-center text-lg font-bold transition-colors duration-300 select-none",
            showFrameworks ? "border-green-600" : "border-red-600",
            !isUpdating && "cursor-pointer",
          )}
        >
          <div
            className={twMerge(
              "absolute top-0.5 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300",
              showFrameworks
                ? "left-0.5 bg-green-600"
                : "left-full -translate-x-[calc(100%+0.125rem)] bg-red-600",
            )}
          >
            <p
              className={twMerge(
                "absolute grow duration-300",
                showFrameworks ? "opacity-100" : "opacity-0",
              )}
            >
              SI
            </p>
            <p
              className={twMerge(
                "absolute grow duration-300",
                showFrameworks ? "opacity-0" : "opacity-100",
              )}
            >
              NO
            </p>
          </div>
        </div>
        <p className="text-lg font-semibold">Includi i framework</p>
      </div>
      <div className="relative">
        <SkillCardContainerWithFrameworks />
        <div
          className={twMerge(
            "bg-custom-black absolute top-0 left-0 w-full overflow-hidden duration-300",
            showFrameworks ? "h-0" : "h-full",
          )}
        >
          <SkillCardContainerNoFrameworks />
        </div>
      </div>
    </div>
  );
}
export default SkillsPage;
