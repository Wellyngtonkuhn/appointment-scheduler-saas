"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const WorkSchema = yup.object({});

export default function WorkTime() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleWorkTime = (data: any) => {
    console.log(data);
  };
  return (
    <div className="mb-4 flex w-full flex-col border-b-[1px] border-solid border-gray-400 pb-2">
      <div className="mb-4">
        <h3 className="text-base font-semibold md:text-lg">
          Configurar horários de atendimento
        </h3>
        <p className=" text-sm font-medium md:text-base">
          Estabeleça os horário em que seu estabelecimento estará atendendo.
        </p>
      </div>

      <div>
        <form onSubmit={handleSubmit(handleWorkTime)}>
          <div className="flex flex-col gap-4">
            {/* Dia da semana */}
            <div className="flex flex-col gap-4 rounded border-[1px] border-solid border-gray-400 p-4 md:flex-row">
              <div className="flex items-center justify-between md:w-48 md:gap-2">
                <h3 className="text-base font-semibold">Segunda</h3>
                <div className="flex items-center gap-1">
                  <input type="checkbox" {...register("segunda")} />
                  <p className="text-sm font-medium">fechado</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <p className="text-sm font-semibold text-gray-600 md:text-base">
                  Manhã
                </p>

                <div className="flex items-center gap-2">
                  <input
                    type="time"
                    placeholder="abertura"
                    className="w-full border-b-[1px] border-solid border-gray-400 px-2 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none md:text-base"
                    {...register("manhaSegundaAbertura")}
                  />
                  <div className="w-6 border-b-[2px] border-solid border-gray-600" />
                  <input
                    type="time"
                    placeholder="fechamento"
                    {...register("manhaSegundaFechamento")}
                    className="w-full border-b-[1px] border-solid border-gray-400 px-2 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none md:text-base"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <p className="text-sm font-semibold text-gray-600 md:text-base">
                  Tarde
                </p>
                <div className="flex items-center gap-2">
                  <input
                    type="time"
                    placeholder="abertura tarde"
                    {...register("tardeSegundaAbertura")}
                    className="w-full border-b-[1px] border-solid border-gray-400 px-2 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none md:text-base"
                  />
                  <div className="w-6 border-b-[2px] border-solid border-gray-600" />
                  <input
                    type="time"
                    placeholder="fechamento tarde"
                    {...register("tardeSegundaFechamento")}
                    className="w-full border-b-[1px] border-solid border-gray-400 px-2 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none md:text-base"
                  />
                </div>
              </div>
            </div>
            {/* Dia da semana */}
            <div className="flex flex-col gap-4 rounded border-[1px] border-solid border-gray-400 p-4 md:flex-row ">
              <div className="flex items-center justify-between md:w-48 md:gap-2">
                <h3 className="text-base font-semibold">Terça</h3>
                <div className="flex items-center gap-1">
                  <input type="checkbox" {...register("terca")} />
                  <p className="text-sm font-medium">fechado</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <p className="text-sm font-semibold text-gray-600 md:text-base">
                  Manhã
                </p>

                <div className="flex items-center gap-2">
                  <input
                    type="time"
                    placeholder="abertura"
                    {...register("manhaTercaAbertura")}
                    className="w-full border-b-[1px] border-solid border-gray-400 px-2 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none md:text-base"
                  />
                  <div className="w-6 border-b-[2px] border-solid border-gray-600" />
                  <input
                    type="time"
                    placeholder="fechamento"
                    {...register("manhaTercaFechamento")}
                    className="w-full border-b-[1px] border-solid border-gray-400 px-2 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none md:text-base"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <p className="text-sm font-semibold text-gray-600 md:text-base">
                  Tarde
                </p>
                <div className="flex items-center gap-2">
                  <input
                    type="time"
                    placeholder="abertura tarde"
                    {...register("tardeTercaAbertura")}
                    className="w-full border-b-[1px] border-solid border-gray-400 px-2 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none md:text-base"
                  />
                  <div className="w-6 border-b-[2px] border-solid border-gray-600" />
                  <input
                    type="time"
                    placeholder="fechamento tarde"
                    {...register("tardeTercaFechamento")}
                    className="w-full border-b-[1px] border-solid border-gray-400 px-2 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none md:text-base"
                  />
                </div>
              </div>
            </div>
            {/* Dia da semana */}
            <div className="flex flex-col gap-4 rounded border-[1px] border-solid border-gray-400 p-4 md:flex-row ">
              <div className="flex items-center justify-between md:w-48 md:gap-2">
                <h3 className="text-base font-semibold">Quarta</h3>
                <div className="flex items-center gap-1">
                  <input type="checkbox" />
                  <p className="text-sm font-medium">fechado</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <p className="text-sm font-semibold text-gray-600 md:text-base">
                  Manhã
                </p>

                <div className="flex items-center gap-2">
                  <input
                    type="time"
                    placeholder="abertura"
                    className="w-full border-b-[1px] border-solid border-gray-400 px-2 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none md:text-base"
                  />
                  <div className="w-6 border-b-[2px] border-solid border-gray-600" />
                  <input
                    type="time"
                    placeholder="fechamento"
                    className="w-full border-b-[1px] border-solid border-gray-400 px-2 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none md:text-base"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <p className="text-sm font-semibold text-gray-600 md:text-base">
                  Tarde
                </p>
                <div className="flex items-center gap-2">
                  <input
                    type="time"
                    placeholder="abertura tarde"
                    className="w-full border-b-[1px] border-solid border-gray-400 px-2 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none md:text-base"
                  />
                  <div className="w-6 border-b-[2px] border-solid border-gray-600" />
                  <input
                    type="time"
                    placeholder="fechamento tarde"
                    className="w-full border-b-[1px] border-solid border-gray-400 px-2 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none md:text-base"
                  />
                </div>
              </div>
            </div>
            {/* Dia da semana */}
            <div className="flex flex-col gap-4 rounded border-[1px] border-solid border-gray-400 p-4 md:flex-row ">
              <div className="flex items-center justify-between md:w-48 md:gap-2">
                <h3 className="text-base font-semibold">Quinta</h3>
                <div className="flex items-center gap-1">
                  <input type="checkbox" />
                  <p className="text-sm font-medium">fechado</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <p className="text-sm font-semibold text-gray-600 md:text-base">
                  Manhã
                </p>

                <div className="flex items-center gap-2">
                  <input
                    type="time"
                    placeholder="abertura"
                    className="w-full border-b-[1px] border-solid border-gray-400 px-2 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none md:text-base"
                  />
                  <div className="w-6 border-b-[2px] border-solid border-gray-600" />
                  <input
                    type="time"
                    placeholder="fechamento"
                    className="w-full border-b-[1px] border-solid border-gray-400 px-2 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none md:text-base"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <p className="text-sm font-semibold text-gray-600 md:text-base">
                  Tarde
                </p>
                <div className="flex items-center gap-2">
                  <input
                    type="time"
                    placeholder="abertura tarde"
                    className="w-full border-b-[1px] border-solid border-gray-400 px-2 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none md:text-base"
                  />
                  <div className="w-6 border-b-[2px] border-solid border-gray-600" />
                  <input
                    type="time"
                    placeholder="fechamento tarde"
                    className="w-full border-b-[1px] border-solid border-gray-400 px-2 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none md:text-base"
                  />
                </div>
              </div>
            </div>
            {/* Dia da semana */}
            <div className="flex flex-col gap-4 rounded border-[1px] border-solid border-gray-400 p-4 md:flex-row ">
              <div className="flex items-center justify-between md:w-48 md:gap-2">
                <h3 className="text-base font-semibold">Sexta</h3>
                <div className="flex items-center gap-1">
                  <input type="checkbox" />
                  <p className="text-sm font-medium">fechado</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <p className="text-sm font-semibold text-gray-600 md:text-base">
                  Manhã
                </p>

                <div className="flex items-center gap-2">
                  <input
                    type="time"
                    placeholder="abertura"
                    className="w-full border-b-[1px] border-solid border-gray-400 px-2 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none md:text-base"
                  />
                  <div className="w-6 border-b-[2px] border-solid border-gray-600" />
                  <input
                    type="time"
                    placeholder="fechamento"
                    className="w-full border-b-[1px] border-solid border-gray-400 px-2 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none md:text-base"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <p className="text-sm font-semibold text-gray-600 md:text-base">
                  Tarde
                </p>
                <div className="flex items-center gap-2">
                  <input
                    type="time"
                    placeholder="abertura tarde"
                    className="w-full border-b-[1px] border-solid border-gray-400 px-2 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none md:text-base"
                  />
                  <div className="w-6 border-b-[2px] border-solid border-gray-600" />
                  <input
                    type="time"
                    placeholder="fechamento tarde"
                    className="w-full border-b-[1px] border-solid border-gray-400 px-2 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none md:text-base"
                  />
                </div>
              </div>
            </div>
            {/* Dia da semana */}
            <div className="flex flex-col gap-4 rounded border-[1px] border-solid border-gray-400 p-4 md:flex-row ">
              <div className="flex items-center justify-between md:w-48 md:gap-2">
                <h3 className="text-base font-semibold">Sábado</h3>
                <div className="flex items-center gap-1">
                  <input type="checkbox" />
                  <p className="text-sm font-medium">fechado</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <p className="text-sm font-semibold text-gray-600 md:text-base">
                  Manhã
                </p>

                <div className="flex items-center gap-2">
                  <input
                    type="time"
                    placeholder="abertura"
                    className="w-full border-b-[1px] border-solid border-gray-400 px-2 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none md:text-base"
                  />
                  <div className="w-6 border-b-[2px] border-solid border-gray-600" />
                  <input
                    type="time"
                    placeholder="fechamento"
                    className="w-full border-b-[1px] border-solid border-gray-400 px-2 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none md:text-base"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <p className="text-sm font-semibold text-gray-600 md:text-base">
                  Tarde
                </p>
                <div className="flex items-center gap-2">
                  <input
                    type="time"
                    placeholder="abertura tarde"
                    className="w-full border-b-[1px] border-solid border-gray-400 px-2 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none md:text-base"
                  />
                  <div className="w-6 border-b-[2px] border-solid border-gray-600" />
                  <input
                    type="time"
                    placeholder="fechamento tarde"
                    className="w-full border-b-[1px] border-solid border-gray-400 px-2 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none md:text-base"
                  />
                </div>
              </div>
            </div>
            {/* Dia da semana */}
            <div className="flex flex-col gap-4 rounded border-[1px] border-solid border-gray-400 p-4 md:flex-row ">
              <div className="flex items-center justify-between md:w-48 md:gap-2">
                <h3 className="text-base font-semibold">Domingo</h3>
                <div className="flex items-center gap-1">
                  <input type="checkbox" />
                  <p className="text-sm font-medium">fechado</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <p className="text-sm font-semibold text-gray-600 md:text-base">
                  Manhã
                </p>

                <div className="flex items-center gap-2">
                  <input
                    type="time"
                    placeholder="abertura"
                    className="w-full border-b-[1px] border-solid border-gray-400 px-2 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none md:text-base"
                  />
                  <div className="w-6 border-b-[2px] border-solid border-gray-600" />
                  <input
                    type="time"
                    placeholder="fechamento"
                    className="w-full border-b-[1px] border-solid border-gray-400 px-2 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none md:text-base"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <p className="text-sm font-semibold text-gray-600 md:text-base">
                  Tarde
                </p>
                <div className="flex items-center gap-2">
                  <input
                    type="time"
                    placeholder="abertura tarde"
                    className="w-full border-b-[1px] border-solid border-gray-400 px-2 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none md:text-base"
                  />
                  <div className="w-6 border-b-[2px] border-solid border-gray-600" />
                  <input
                    type="time"
                    placeholder="fechamento tarde"
                    className="w-full border-b-[1px] border-solid border-gray-400 px-2 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none md:text-base"
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="mt-2 w-full rounded-2xl bg-orange-300 py-2 text-sm font-semibold text-gray-50
    duration-300 ease-in-out hover:bg-orange-400 md:text-base
    "
          >
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
}
