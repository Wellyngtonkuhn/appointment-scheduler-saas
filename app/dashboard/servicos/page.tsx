"use client";
import { useState } from "react";
import NewService from "@/components/service/NewService";
import { IoMdAdd } from "react-icons/io";
import Service from "@/components/service/Services";

enum ServiceType {
  newService = "newService",
  seeServices = "seeServices",
}

export default function Servicos() {
  const [serviceAction, setServiceAction] = useState<ServiceType>(
    ServiceType.seeServices
  );

  return (
    <div className="mb-16 mt-4 w-full md:mb-8 md:mt-8">
      <div className="flex w-full flex-col items-center justify-between md:flex-row">
        <h2 className="mb-2 text-xl font-semibold text-black md:text-2xl">
          Meus serviços
        </h2>

        <div className="flex gap-2 ">
          <button
            onClick={() => setServiceAction(ServiceType.seeServices)}
            className="mt-2 rounded-2xl bg-orange-300 px-8 py-2 text-sm font-semibold text-gray-50 duration-300 ease-in-out hover:bg-orange-400 md:text-base"
          >
            Meus serviços
          </button>
          <button
            onClick={() => setServiceAction(ServiceType.newService)}
            className="mt-2 rounded-2xl bg-orange-300 px-8 py-2 text-sm font-semibold text-gray-50 duration-300 ease-in-out hover:bg-orange-400 md:text-base"
          >
            Novo serviço
          </button>
        </div>
      </div>

      {serviceAction === ServiceType.seeServices ? <Service /> : <NewService />}
    </div>
  );
}
