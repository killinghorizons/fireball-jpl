import ThemeSwap from "@/components/ThemeSwap";
import Meteor from "@/components/icons/Meteor";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50">
      <nav>
        <div className="navbar bg-base-100 shadow-sm">
          <div className="flex-1">
            <div className="flex items-center gap-2 pl-3">
              <Meteor />
              <Link className="font-bold tracking-tight " href="/">
                Fireball
              </Link>
            </div>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <ThemeSwap />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
