/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";

function Descricao() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="w-full h-[100vh] flex items-center justify-around px-5">
      {/* Imagem com animação */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="w-[45%] bg-cover relative overflow-hidden h-[70%] flex items-center justify-center"
      >
        <img
          src="/img/perfil-1.png"
          alt="Perfil"
          className="max-w-[90%] h-auto object-contain"
        />
      </motion.div>

      {/* Texto com animações em cascata */}
      <motion.div
        className="border border-[var(--color-button)] rounded-lg bg-cover w-[45%] h-[70%] flex items-start justify-around flex-col p-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
      >
        <motion.h1
          variants={fadeUp}
          className="text-white font-bold text-3xl uppercase"
          style={{ fontFamily: "var(--font-main)" }}
        >
          Erico e Hugo Rocha
        </motion.h1>

        {[
          "Os dois irmãos formaram os maiores empreendedores digitais do Brasil e se tornaram referência na América Latina quando o assunto é lançamento.",
          "Desde 2013, ensinaram mais de 60 mil alunos a sair do absoluto zero e chegar aos seis, sete e até oito dígitos de faturamento em 7 dias consecutivos.",
          "Seus alunos foram responsáveis por somar um faturamento de mais de 1 bilhão de reais nos últimos anos.",
          "Ambos acreditam que o empreendedorismo tem a força necessária para transformar o país e, por isso, têm a missão de formar mil faixas-pretas (empreendedores que faturam, anualmente, mais de R$ 2 milhões de reais no digital).",
        ].map((text, i) => (
          <motion.p
            key={i}
            variants={fadeUp}
            className="text-white text-sm"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            {text}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
}

export default Descricao;
