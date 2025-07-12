import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

const GinSvg = ({ className }: Props) => (
  <img src="/gin_icon.png" className={twMerge(className, "object-contain")} />
);
export default GinSvg;
