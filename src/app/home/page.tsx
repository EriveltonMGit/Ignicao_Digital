// HomePage.tsx
"use client";

import { motion } from "framer-motion";
import InputSelect from "../components/ui/input";
import "../styles/globals.css";
import { Calendar, MousePointer2 } from "lucide-react";

function HomePage() {
  const handleFormSubmit = (data: { email: string; telefone: string }) => {
    console.log("Dados enviados:", data);
  };

  return (
    <>
      <header
        className="border w-full h-[100vh] bg-cover bg-center relative bg-[var(--color-bg)] font-[var(--font-main)] z-20"
        style={{ backgroundImage: "url('/img/bg.webp')" }}
      >
        {/* Aqui começa o conteúdo animado */}
        <motion.div
          className="w-[45%] h-[80%] mt-[5%] ml-[5%] flex flex-col items-center justify-around"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-full h-[20%] flex items-center justify-start">
            <h1 className="text-white text-3xl uppercase font-bold">
              As inovações e avanços mais recentes do marketing digital
            </h1>
          </div>

          <div className="w-full h-[10%]">
            <p
              className="text-gray-400"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Que estão gerando milhões em vendas na internet, totalmente ao seu
              alcance para replicar
            </p>
          </div>

          <div className="w-full h-[10%] flex flex-col gap-1">
            <p
              className="text-white font-bold flex items-center gap-2"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              <Calendar className="w-5 h-5 text-[var(--color-button)]" />
              Dia 18/04/23 (terça-feira) | 20h (horário de Brasília)
            </p>
            <p
              className="text-white font-bold flex items-center gap-2"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              <MousePointer2 className="w-5 h-5 text-[var(--color-button)] cursor-pointer" />
              As aulas são 100% online e gratuitas
            </p>
          </div>

          <div className="w-full h-[35%] flex flex-col gap-1">
            <InputSelect onSubmit={handleFormSubmit} />
          </div>
        </motion.div>
      </header>
    </>
  );
}

export default HomePage;
