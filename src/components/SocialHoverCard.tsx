import { ArrowRightIcon } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { twMerge } from "tailwind-merge";

interface Props {
  imgSrc: string;
  alt?: string;
  link: string;
  platform: string;
  triggerDivClass?: string;
}

function SocialHoverCard({
  imgSrc,
  alt = "",
  platform,
  link,
  triggerDivClass = "",
}: Props) {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <div
          className={twMerge(
            "h-10 w-10 overflow-hidden rounded-md border",
            triggerDivClass,
          )}
        >
          <img src={imgSrc} alt={alt} className="h-full w-full object-cover" />
        </div>
      </HoverCardTrigger>
      <HoverCardContent>
        Trovami su <strong>{platform}</strong>
        <a
          target="_blank"
          href={link}
          className="bg-custom-red text-custom-white mt-1 flex w-fit items-center gap-x-1.5 rounded-md p-2 font-semibold"
        >
          Vai <ArrowRightIcon size={20} />
        </a>
      </HoverCardContent>
    </HoverCard>
  );
}
export default SocialHoverCard;
