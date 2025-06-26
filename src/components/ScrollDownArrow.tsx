import { useState, useEffect } from "react";
import { ArrowDownIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

function ScrollDownArrow() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={twMerge(
          "motion-preset-oscillate bg-custom-black/70 motion-duration-1500 fixed bottom-4 left-1/2 -translate-x-1/2 rounded-full p-2 duration-300",
          isTop ? "opacity-100" : "opacity-0",
        )}
      >
        <ArrowDownIcon className="h-10 w-10" />
      </div>
    </>
  );
}
export default ScrollDownArrow;
