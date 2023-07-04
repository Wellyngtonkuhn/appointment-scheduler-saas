"use client";
import Link from "next/link";
import { Metadata } from "next";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { FcGoogle } from "react-icons/fc";
import { MdOutlineAlternateEmail, MdLock } from "react-icons/md";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const loginSchema = yup.object({
  email: yup.string().email("Email inválido").required("Campo obrigatório"),
  password: yup
    .string()
    .min(9, "Mínimo de 8 caracteres")
    .required("Campo obrigatório"),
});

type LoginForm = yup.InferType<typeof loginSchema>;

export const metadata: Metadata = {
  title: "login",
};

export default function Login() {
  const [showPassword, setShowPassword] = useState("password");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(loginSchema),
    mode: "all",
  });

  const handleShowPassword = () => {
    setShowPassword((prev) => (prev === "text" ? "password" : "text"));
  };

  const handleLogin: SubmitHandler<LoginForm> = (data) => {
    console.log(data);
  };

  return (
    <section className="py-14">
      <div className="mx-auto flex max-w-md flex-col px-9">
        <h2 className="mb-2 text-xl font-semibold text-black">Login</h2>
        <p className="mb-16 text-sm font-semibold text-gray-600">
          Bem vindo de volta para sua conta
        </p>

        <form
          onSubmit={handleSubmit(handleLogin)}
          className="flex w-full flex-col "
        >
          <div className="mb-1 flex w-full items-center border-b-[1px] border-solid border-gray-400 px-2 pb-2">
            <MdOutlineAlternateEmail className="text-gray-600" />
            <input
              type="text"
              placeholder="Email"
              className="w-full pl-5 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none"
              {...register("email")}
            />
          </div>
          <p className="mb-3 text-xs font-semibold text-red-600">
            {errors.email?.message}
          </p>

          <div className="flex w-full items-center border-b-[1px] border-solid border-gray-400 px-2 pb-2">
            <MdLock className="text-gray-600" />
            <input
              type={showPassword}
              placeholder="Password"
              className="w-full pl-5 text-sm font-semibold text-gray-600 focus:bg-inherit focus:outline-none"
              {...register("password")}
            />
            <button onClick={() => handleShowPassword()}>
              {showPassword === "password" ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </div>
          <p className="mb-3 text-xs font-semibold text-red-600">
            {errors.password?.message}
          </p>

          <Link
            href="#"
            className="py-4 text-left text-sm font-medium text-gray-900"
          >
            Esqueci minha senha
          </Link>

          <button
            type="submit"
            className="w-full rounded-2xl bg-orange-300 py-4 text-sm font-semibold text-gray-50
            duration-300 ease-in-out hover:bg-orange-400
            "
          >
            Entrar
          </button>
        </form>

        <div className="flex w-full items-center justify-center py-8">
          <div className="w-full border-b-[1px] border-solid border-gray-400" />
          <p className="px-3 text-xs font-semibold text-black">OU</p>
          <div className="w-full border-b-[1px] border-solid border-gray-400" />
        </div>

        <div className="w-full">
          <button className="flex w-full items-center justify-center gap-4 rounded-2xl py-4 shadow-md">
            <span className="text-2xl">
              <FcGoogle />
            </span>

            <span className="text-sm font-semibold text-black">
              Entrar com o Google
            </span>
          </button>
        </div>

        <div className="mt-10">
          <p className="text-xs font-semibold text-gray-600">
            Ainda não possui conta?
            <Link href="criar-conta" className="text-orange-500">
              {" "}
              Criar Conta
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
