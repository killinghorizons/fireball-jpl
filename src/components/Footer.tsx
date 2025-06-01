import Meteor from "@/components/icons/Meteor";
import Link from "next/link";

export default function NavBar() {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by KH
        </p>
      </aside>
    </footer>
  );
}
