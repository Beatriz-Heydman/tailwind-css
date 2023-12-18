import { MoonStars } from "@phosphor-icons/react";
import { NavItem } from "./nav-item";

export function Header() {
  return (
    <header className="flex">
      <div className="w-full h-24 flex content-center place-items-center gap-2 p-6 ">
        <img
          src="assets/images/tailwind-css-logo.png"
          alt="Tailwind logo"
          className="w-12 h-10"
        />
        <h1 className="text-2xl font-medium text-white ">tailwind CSS</h1>
      </div>
      <div className="w-full h-24 flex justify-end place-items-center p-6 gap-4">
        <NavItem />

        <div className="h-12 w-0.5 bg-blue-300" />

        <button>
          <MoonStars size={24} color="#7dd3fc" />
        </button>

        <button>
          <img
            src="assets/images/github-logo.png"
            alt="Github logo"
            className="h-5 w-5 hover:opacity-70"
          />
        </button>
      </div>
    </header>
  );
}
