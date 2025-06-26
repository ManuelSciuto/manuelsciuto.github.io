import { ArrowRightIcon } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { twMerge } from "tailwind-merge";

interface Props {
  imgSrc: string;
  alt?: string;
  link: string;
  platform: string;
  triggerDivClass?: string;
  roundIcon?: boolean;
}

function SocialHoverCard({
  imgSrc,
  alt = "",
  platform,
  link,
  triggerDivClass = "",
  roundIcon = false,
}: Props) {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <div
          className={twMerge(
            "border-custom-gray h-10 w-10 overflow-hidden rounded-md border",
            triggerDivClass,
          )}
        >
          <img
            src={imgSrc}
            alt={alt}
            className={twMerge(
              "h-full w-full object-cover",
              roundIcon && "rounded-sm",
            )}
          />
        </div>
      </HoverCardTrigger>
      <HoverCardContent>
        Trovami su <strong>{platform}</strong>
        <a
          target="_blank"
          href={link}
          className="bg-custom-red text-custom-white mt-2.5 flex w-fit items-center gap-x-1.5 rounded-md px-4 py-2 font-semibold"
        >
          Vai <ArrowRightIcon size={20} />
        </a>
      </HoverCardContent>
    </HoverCard>
  );
}
export default SocialHoverCard;
