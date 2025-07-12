import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

const PhpSvg = ({ className }: Props) => (
  <img src="/php_icon.png" className={twMerge(className, "object-contain")} />
);
export default PhpSvg;
