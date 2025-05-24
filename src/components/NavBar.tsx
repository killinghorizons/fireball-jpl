import ThemeSwap from "@/components/ThemeSwap";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50">
      <nav>
        <div className="navbar bg-base-100 shadow-sm">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">Fireball</a>
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
