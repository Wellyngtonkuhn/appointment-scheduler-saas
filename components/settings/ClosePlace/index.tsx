export default function ClosePlace() {
  const handleClosePlace = () => {};

  const handleOpenPlace = () => {};
  return (
    <div className="mb-4 flex w-full items-center justify-between border-b-[1px] border-solid border-gray-400 pb-2">
      <div>
        <h3 className="text-base font-semibold md:text-lg">
          Fechar estabelecimento
        </h3>
        <p className=" text-sm font-medium md:text-base">
          Se o estabelecimento estiver fechado não poderá aceitar agendamentos.
        </p>
      </div>
      <button
        // onClick={() => handleClosePlace()}
        type="submit"
        className="mt-2 rounded-2xl bg-red-600 px-4 py-2 text-sm font-semibold text-gray-50
      duration-300 ease-in-out hover:bg-red-500 md:text-base
      "
      >
        Fechar
      </button>
      <button
        // onClick={() => handleOpenPlace()}
        type="submit"
        className="mt-2 rounded-2xl bg-green-600 px-4 py-2 text-sm font-semibold text-gray-50
      duration-300 ease-in-out hover:bg-green-500 md:text-base
      "
      >
        Abrir
      </button>
    </div>
  );
}
