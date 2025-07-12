import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

const RubySvg = ({ className }: Props) => (
  <img src="/ruby_icon.png" className={twMerge(className, "object-contain")} />
);
export default RubySvg;
