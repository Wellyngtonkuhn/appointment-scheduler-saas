export default function DeleteAccount({ id }: any) {
  const handleDeleteAccount = (id: any) => {};
  return (
    <div className="flex w-full items-center justify-between border-b-[1px] border-solid border-gray-400 pb-2">
      <div>
        <h3 className="text-base font-semibold md:text-lg">Deletar conta</h3>
        <p className=" text-sm font-medium md:text-base">
          Uma vez que deletar, não tem como voltar atrás. Tenha certeza.
        </p>
      </div>
      <button
        // onClick={() => handleDeleteAccount(id)}
        type="submit"
        className="mt-2 rounded-2xl bg-red-600 px-4 py-2 text-sm font-semibold text-gray-50
      duration-300 ease-in-out hover:bg-red-500 md:text-base
      "
      >
        Deletar
      </button>
    </div>
  );
}
