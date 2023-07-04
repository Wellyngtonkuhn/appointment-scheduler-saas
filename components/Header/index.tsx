import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  return (
    <header className="w-full bg-orange-500 py-5 fixed top-0">
      <div className="flex items-center justify-between  px-4 md:mx-auto md:max-w-7xl">
        <Link href="/">
          <h1 className="text-2xl font-bold text-gray-50">
            Agendamento Online
          </h1>
        </Link>

        <nav className="hidden text-base font-medium md:flex">
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="text-gray-50">Home</Link>
            </li>
            <li>
              <Link href="estabelecimentos" className="text-gray-50">Estabelecimentos</Link>
            </li>
            <li>
              <Link href="dashboard/home" className="text-gray-50">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <div className="md:hidden">
          <button className="text-2xl font-bold text-gray-50">
            <RxHamburgerMenu />
          </button>
        </div>
      </div>
    </header>
  );
}
