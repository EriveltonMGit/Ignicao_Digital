"use client";

import { motion } from "framer-motion";
import InputSelect from "../components/ui/input";
import "../styles/globals.css";
import { Calendar, MousePointer2 } from "lucide-react";
import { toast, Toaster } from "sonner";

function HomePage() {
  const handleFormSubmit = (data: { email: string; telefone: string }) => {
    console.log("Dados enviados:", data);

    toast.dismiss();

    toast.success("Cadastro realizado com sucesso!", {
      description: "Deseja conversar com a gente no WhatsApp?",
      action: {
        label: "Abrir WhatsApp",
        onClick: () => {
          const mensagem = encodeURIComponent(
            "Olá! Acabei de me cadastrar e quero saber mais."
          );
          const numero = "5561999999999";
          const link = `https://wa.me/${numero}?text=${mensagem}`;
          window.open(link, "_blank");
        },
      },
      duration: 60000,
    });
  };

  return (
    <header
      className="w-full h-[100vh] bg-cover bg-center relative bg-[var(--color-bg)] font-[var(--font-main)] z-20
                 bg-[url('/img/device.webp')] md:bg-[url('/img/bg.webp')]"
    >
      <motion.div
        className="
          w-[90%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[35%]
          h-[80%]
          mt-[25%] md:mt-[8%] lg:mt-[6%] 2xl:mt-[10%]
          ml-[5%] lg:ml-[8%] 2xl:ml-[10%]
          flex flex-col items-center justify-center gap-8
        "
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-full h-auto md:h-[20%] flex items-center justify-start">
          <h1
            className="
            text-white
            text-4xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl
            uppercase font-bold
          "
          >
            As inovações e avanços mais recentes do marketing digital
          </h1>
        </div>

        <div className="w-full h-auto md:h-[10%]">
          <p
            className="text-gray-400 text-base md:text-lg lg:text-lg xl:text-xl"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Que estão gerando milhões em vendas na internet, totalmente ao seu
            alcance para replicar
          </p>
        </div>

        <div className="w-full h-auto md:h-[10%] flex flex-col gap-1">
          <p
            className="text-white text-sm md:text-base lg:text-lg xl:text-xl font-bold flex items-start md:items-center gap-2"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            <Calendar className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-[var(--color-button)] mt-1 md:mt-0 flex-shrink-0" />
            <span>Dia 18/04/23 (terça-feira) | 20h (horário de Brasília)</span>
          </p>
          <p
            className="text-white text-sm md:text-base lg:text-lg xl:text-xl font-bold flex items-start md:items-center gap-2"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            <MousePointer2 className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-[var(--color-button)] mt-1 md:mt-0 flex-shrink-0" />
            <span>As aulas são 100% online e gratuitas</span>
          </p>
        </div>

        <div className="w-full h-auto md:h-[35%] flex flex-col gap-1">
          <div id="inscricao">
            <InputSelect onSubmit={handleFormSubmit} />
          </div>
        </div>
      </motion.div>
      <Toaster richColors position="top-right" />
    </header>
  );
}

export default HomePage;