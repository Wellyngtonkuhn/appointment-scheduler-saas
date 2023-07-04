"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TfiWrite } from "react-icons/tfi";
import { TiStopwatch } from "react-icons/ti";
import { FiDollarSign, FiImage } from "react-icons/fi";

const newServiceSchema = yup.object({
  serviceName: yup.string().required("Campo obrigatório"),
  serviceTime: yup.string().required("Campo obrigatório"),
  servicePrice: yup.number().required("Campo obrigatório"),
  servicePhoto: yup.mixed().required("Campo obrigatório"),
});

type NewServiceType = yup.InferType<typeof newServiceSchema>;

export default function NewService() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewServiceType>({
    resolver: yupResolver(newServiceSchema),
    mode: "all",
  });

  const handleNewService: SubmitHandler<NewServiceType> = (data) => {
    console.log(data);
  };
  return (
    <div className="mx-auto max-w-md">
      <form
        className="mt-8 flex flex-col"
        onSubmit={handleSubmit(handleNewService)}
      >
        <label className="mb-1 text-sm font-medium md:text-base">Serviço</label>
        <div className="mb-1 flex w-full items-center border-b-[1px] border-solid border-gray-400 px-2 pb-1">
          <TfiWrite className="text-gray-600 md:text-lg" />
          <input
            type="text"
            placeholder="Corte de Cabelo"
            className="w-full pl-5 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none md:text-base"
            {...register("serviceName")}
          />
        </div>
        <p className="mb-3 text-xs font-semibold text-red-600">
          {errors.serviceName?.message}
        </p>
        <label className="mb-1 mt-1 text-sm font-medium md:text-base">
          Duração do serviço
        </label>
        <div className="mb-1 flex w-full items-center border-b-[1px] border-solid border-gray-400 px-2 pb-1">
          <TiStopwatch className="text-gray-600 md:text-lg" />
          <input
            type="time"
            placeholder="duração do serviço"
            className="w-full pl-5 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none md:text-base"
            {...register("serviceTime")}
          />
        </div>
        <p className="mb-3 text-xs font-semibold text-red-600">
          {errors.serviceTime?.message}
        </p>
        <label className="mb-1 mt-1 text-sm font-medium md:text-base">
          Preço do serviço
        </label>
        <div className="mb-1 flex w-full items-center border-b-[1px] border-solid border-gray-400 px-2 pb-1">
          <FiDollarSign className="text-gray-600 md:text-lg" />
          <input
            type="number"
            placeholder="30,00"
            className="w-full pl-5 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none md:text-base"
            {...register("servicePrice")}
          />
        </div>
        <p className="mb-3 text-xs font-semibold text-red-600">
          {errors.servicePrice?.message}
        </p>
        <label className="mb-1 mt-1 text-sm font-medium md:text-base">
          Imagem
        </label>
        <div className="mb-1 flex w-full items-center border-b-[1px] border-solid border-gray-400 px-2 pb-1">
          <FiImage className="text-gray-600 md:text-lg" />
          <input
            type="file"
            placeholder="foto"
            className="w-full pl-5 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none md:text-base"
            {...register("servicePhoto")}
          />
        </div>
        <p className="mb-3 text-xs font-semibold text-red-600">
          {errors.servicePhoto?.message}
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
    </div>
  );
}
