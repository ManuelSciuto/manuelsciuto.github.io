import SocialHoverCard from "./SocialHoverCard";

function MyLinks() {
  return (
    <div className="flex gap-2">
      <SocialHoverCard
        imgSrc="my_links/github.png"
        alt="Github"
        link="https://github.com/ManuelSciuto"
        platform="Github"
        triggerDivClass="p-1"
      />
      <SocialHoverCard
        imgSrc="my_links/linkedin.png"
        alt="Linkedin"
        link="https://www.linkedin.com/in/manuel-sciuto-012291367/"
        platform="Linkedin"
        triggerDivClass="p-1"
        roundIcon
      />
      <SocialHoverCard
        imgSrc="my_links/codewars.png"
        alt="Codewars"
        link="https://www.codewars.com/users/Manuel393"
        platform="Codewars"
      />
      <SocialHoverCard
        imgSrc="my_links/leetcode.png"
        alt="Leetcode"
        link="https://leetcode.com/u/Manuel393/"
        platform="Leetcode"
      />
    </div>
  );
}
export default MyLinks;
