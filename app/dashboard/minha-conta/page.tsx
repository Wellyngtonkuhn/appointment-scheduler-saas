"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { FaHome, FaWhatsapp, FaMapMarked, FaPhone } from "react-icons/fa";
import { Metadata } from "next";

const myAccountSchema = yup.object({
  businessName: yup.string().required("Campo obtigatório"),
  businessAddress: yup.string().required("Campo obtigatório"),
  businessWhatsapp: yup.string().required("Campo obtigatório"),
  businessPhone: yup.string().required("Campo obtigatório"),
});

type MyAccountForm = yup.InferType<typeof myAccountSchema>;

export const metadata: Metadata = {
  title: "minha-conta",
};

export default function MyAccount() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MyAccountForm>({
    resolver: yupResolver(myAccountSchema),
    mode: "all",
  });

  const handleSubmitEvent: SubmitHandler<MyAccountForm> = (data) => {
    console.log(data);
  };

  return (
    <div className="mt-4 w-full md:mt-8">
      <h2 className="mb-2 text-xl font-semibold text-black md:text-2xl">
        Minha conta
      </h2>
      <div className="mx-auto max-w-md">
        <form
          onClick={handleSubmit(handleSubmitEvent)}
          className="mt-8 flex flex-col"
        >
          <div className="mb-1 flex w-full items-center border-b-[1px] border-solid border-gray-400 px-2 pb-1">
            <FaHome className="text-gray-600 md:text-lg" />
            <input
              type="text"
              placeholder="nome do estabelecimento"
              className="w-full pl-5 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none md:text-base"
              {...register("businessName")}
            />
          </div>
          <p className="mb-3 text-xs font-semibold text-red-600">
            {errors.businessName?.message}
          </p>

          <div className="mb-1 flex w-full items-center border-b-[1px] border-solid border-gray-400 px-2 pb-1">
            <FaMapMarked className="text-gray-600 md:text-lg" />
            <input
              type="text"
              placeholder="endereço"
              className="w-full pl-5 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none md:text-base"
              {...register("businessAddress")}
            />
          </div>
          <p className="mb-3 text-xs font-semibold text-red-600">
            {errors.businessAddress?.message}
          </p>
          <div className="mb-1 flex w-full items-center border-b-[1px] border-solid border-gray-400 px-2 pb-1">
            <FaWhatsapp className="text-gray-600 md:text-lg" />
            <input
              type="text"
              placeholder="whatsapp"
              className="w-full pl-5 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none md:text-base"
              {...register("businessWhatsapp")}
            />
          </div>
          <p className="mb-3 text-xs font-semibold text-red-600">
            {errors.businessWhatsapp?.message}
          </p>
          <div className="mb-1 flex w-full items-center border-b-[1px] border-solid border-gray-400 px-2 pb-1">
            <FaPhone className="text-gray-600 md:text-lg" />
            <input
              type="text"
              placeholder="telefone"
              className="w-full pl-5 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none md:text-base"
              {...register("businessPhone")}
            />
          </div>
          <p className="mb-3 text-xs font-semibold text-red-600">
            {errors.businessPhone?.message}
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
    </div>
  );
}
