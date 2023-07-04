"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const holidaysSchema = yup.object({
  motivo: yup.string().required("Campo obrigatório"),
  data: yup.date().required("Campo obrigatório"),
});

type HolidaysType = yup.InferType<typeof holidaysSchema>;

export default function Holidays() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HolidaysType>({
    resolver: yupResolver(holidaysSchema),
    mode: "all",
  });

  const handleHolidays: SubmitHandler<HolidaysType> = (data) => {
    console.log(data.motivo);
    console.log(data.data.toLocaleDateString());
  };

  return (
    <div className="mb-4 flex w-full flex-col border-b-[1px] border-solid border-gray-400 pb-2">
      <div className="mb-4">
        <h3 className="text-base font-semibold md:text-lg">
          Configurar feriados
        </h3>
        <p className="text-sm font-medium md:text-base">
          Estabeleça os dias em que seu estabelecimento ficará fechado.
        </p>
      </div>

      <div className="flex flex-col justify-between gap-4 md:flex-row">
        <form onSubmit={handleSubmit(handleHolidays)} className="max-w-sm">
          <input
            type="text"
            placeholder="motivo"
            {...register("motivo")}
            className="mb-2 w-full border-b-[1px] border-solid border-gray-400 px-2 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none md:text-base"
          />
          <p className="mb-3 text-xs font-semibold text-red-600">
            {errors.motivo?.message}
          </p>

          <input
            type="date"
            {...register("data")}
            className="mb-2 w-full border-b-[1px] border-solid border-gray-400 px-2 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none md:text-base"
          />
          <p className="mb-3 text-xs font-semibold text-red-600">
            {errors.data?.message}
          </p>

          <button
            type="submit"
            className="mt-2 w-full rounded-2xl bg-orange-300 py-2 text-sm font-semibold text-gray-50
      duration-300 ease-in-out hover:bg-orange-400 md:text-base
      "
          >
            Salvar
          </button>
        </form>
        <div>
          Mostar os resultados aqui dos dias que estarão fechados com opções
          para excluir
        </div>
      </div>
    </div>
  );
}
