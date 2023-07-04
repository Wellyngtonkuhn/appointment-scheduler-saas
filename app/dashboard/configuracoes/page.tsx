import ClosePlace from "@/components/settings/ClosePlace";
import DeleteAccount from "@/components/settings/DeleteAccount";
import Holidays from "@/components/settings/Holidays";
import WorkTime from "@/components/settings/WorkTime";

export default function Settings() {
  return (
    <div className="mb-20 mt-4 w-full md:my-8">
      <h2 className="mb-2 text-xl font-semibold text-black md:text-2xl">
        Configurações
      </h2>

      <div className="md:px-10">
        {/* Configurar Horário de fucionamento */}
        <WorkTime />
        {/* Configurar feriados */}
        <Holidays />
        {/* Fechar estabelecimento */}
        <ClosePlace />
        {/* Excluir conta*/}
        <DeleteAccount />
      </div>
    </div>
  );
}
