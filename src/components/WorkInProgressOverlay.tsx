import { useEffect, useState } from "react";

function WIPOverlay() {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const cookieName = "wip_overlay_dismissed";
    const cookies = document.cookie.split("; ").map((c) => c.split("="));
    const found = cookies.find(([name]) => name === cookieName);

    if (!found) {
      setShowOverlay(true);
    }
  }, []);

  const handleContinue = () => {
    const expires = new Date();
    expires.setTime(expires.getTime() + 15 * 60 * 1000);
    document.cookie = `mrs_wip_overlay_dismissed=true; expires=${expires.toUTCString()}; path=/`;
    setShowOverlay(false);
  };

  if (!showOverlay) return null;

  return (
    <div className="striped-bg fixed top-0 left-0 z-[100] flex h-full w-full items-center justify-center">
      <div className="flex aspect-video w-1/2 flex-col items-center justify-center gap-y-6 rounded-2xl border-2 bg-neutral-800">
        <h1 className="text-5xl font-bold">WORK IN PROGRESS</h1>
        <button
          onClick={handleContinue}
          className="cursor-pointer rounded-md bg-neutral-300 px-4 py-2 text-lg font-semibold text-black hover:bg-neutral-400"
        >
          Continua
        </button>
      </div>
    </div>
  );
}

export default WIPOverlay;
