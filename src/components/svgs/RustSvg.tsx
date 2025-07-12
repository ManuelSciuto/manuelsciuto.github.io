import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

const RustSvg = ({ className }: Props) => (
  <img src="/rust_icon.png" className={twMerge(className, "object-contain")} />
);
export default RustSvg;
