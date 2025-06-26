import { Link } from "react-router";

function SkillsIndexPage() {
  return (
    <div className="pt-8">
      <div className="border-custom-gray flex h-16 border-y">
        <Link
          to={"/skills/languages"}
          className="hover:bg-custom-white hover:text-custom-black hover:inset-shadow-custom-black border-custom-gray hover:inset-shadow-md flex grow items-center justify-center border-r text-xl font-semibold duration-300"
        >
          Languages
        </Link>
        <Link
          to={"/skills/devops"}
          className="hover:bg-custom-white hover:text-custom-black hover:inset-shadow-custom-black hover:inset-shadow-md flex grow items-center justify-center text-xl font-semibold duration-300"
        >
          Devops
        </Link>
      </div>
    </div>
  );
}
export default SkillsIndexPage;
