import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CgLogOut } from "react-icons/cg";
import { FaBook, FaHome, FaUser } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mt-[72px] flex gap-4">
      <div className="flex w-full flex-col-reverse px-9 md:flex-row md:px-0">
        <div className="fixed bottom-0 left-0 w-full bg-orange-500 px-4 py-4 md:top-16 md:w-auto">
          <div className="hidden md:block md:py-4">
            <Image src={""} alt="" />
            <h2 className="text-xl font-medium">
              Bem vindo{" "}
              <span className="text-base font-medium">estabelecimento</span>
            </h2>
          </div>

          <ul className="flex items-center justify-between  md:flex-col md:items-start md:gap-3">
            <li>
              <Link
                href="home"
                className="text-base font-medium text-gray-950 md:flex md:items-center md:gap-2"
              >
                <FaHome />
                <p className="hidden md:block">Home</p>
              </Link>
            </li>
            <li>
              <Link
                href="agendamentos"
                className="text-base font-medium text-gray-950 md:flex md:items-center md:gap-2"
              >
                <FaBook />
                <p className="hidden md:block">Agendamentos</p>
              </Link>
            </li>
            <li>
              <Link
                href="servicos"
                className="text-base font-medium text-gray-950 md:flex md:items-center md:gap-2"
              >
                <MdOutlineWork />
                <p className="hidden md:block">Serviços</p>
              </Link>
            </li>
            <li>
              <Link
                href="minha-conta"
                className="text-base font-medium text-gray-950 md:flex md:items-center md:gap-2"
              >
                <FaUser />
                <p className="hidden md:block">Minha conta</p>
              </Link>
            </li>
            <li>
              <Link
                href="configuracoes"
                className="text-base font-medium text-gray-950 md:flex md:items-center md:gap-2"
              >
                <SlOptionsVertical />
                <p className="hidden md:block">Configurações</p>
              </Link>
            </li>
            <li>
              <button className="text-base font-medium text-gray-950 md:flex md:items-center md:gap-2">
                <CgLogOut />
                <p className="hidden md:block">Sair</p>
              </button>
            </li>
          </ul>
        </div>

        <div className="w-full md:ml-72 md:mt-6 md:pr-9">{children}</div>
      </div>
    </section>
  );
}
