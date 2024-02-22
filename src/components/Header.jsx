import Logo from "./Logo";

export default function Header() {
  return (
    <>
      <div className="flex gap-8 justify-center items-center font-bold text-gray-300 mb-2">
        <Logo />
        <a className="hover:text-orange-300" href="http://Git">
          View on Github
        </a>
        <a className="hover:text-orange-300" href="http://Linkedin">
          Collab
        </a>
      </div>
    </>
  );
}
