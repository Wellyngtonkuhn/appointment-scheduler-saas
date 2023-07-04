import Image from "next/image";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

export default function Service() {
  return (
    <div className="my-8 w-full ">
      <div className="md:my-8 md:px-10">
        <div className="space-y-2">
          <div className="relative flex flex-col rounded border-[1px] border-solid border-gray-400 p-2 md:flex-row md:py-5">
            <div className="absolute right-1 top-1 flex items-center gap-1">
              <button>
                <AiOutlineDelete className=" text-red-700" />
              </button>
              <button>
                <AiOutlineEdit className=" text-green-700" />
              </button>
            </div>
            <div>
              <Image src={""} alt="Foto do serviço" />
            </div>
            <div className="flex w-full flex-wrap items-center justify-evenly gap-1">
              <h3 className="flex flex-col items-center text-base font-semibold md:text-lg">
                Serviço
                <span className="font-normal">Cabelo e Barba</span>
              </h3>
              <h3 className=" flex flex-col items-center text-base font-semibold md:text-lg">
                Duração
                <span className="font-normal">50min</span>
              </h3>
              <h3 className=" flex flex-col items-center text-base font-semibold md:text-lg">
                Preço
                <span className="font-normal">R$40,00</span>
              </h3>
            </div>
          </div>

          <div className="relative flex flex-col rounded border-[1px] border-solid border-gray-400 p-2 md:flex-row md:py-5">
            <div className="absolute right-1 top-1 flex items-center gap-1">
              <button>
                <AiOutlineDelete className=" text-red-700" />
              </button>
              <button>
                <AiOutlineEdit className=" text-green-700" />
              </button>
            </div>
            <div>
              <Image src={""} alt="Foto do serviço" />
            </div>
            <div className="flex w-full flex-wrap items-center justify-evenly gap-1">
              <h3 className="flex flex-col items-center text-base font-semibold md:text-lg">
                Serviço
                <span className="font-normal">Cabelo</span>
              </h3>
              <h3 className="flex flex-col items-center text-base font-semibold md:text-lg">
                Duração
                <span className="font-normal">30min</span>
              </h3>
              <h3 className="flex flex-col items-center text-base font-semibold md:text-lg">
                Preço
                <span className="font-normal">R$25,00</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
