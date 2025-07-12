import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

const FlutterSvg = ({ className }: Props) => (
  <img
    src="/flutter_icon.png"
    className={twMerge(className, "object-contain")}
  />
);
export default FlutterSvg;
