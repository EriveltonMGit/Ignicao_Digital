"use client";
import { motion } from "framer-motion";

function Sobre() {
  return (
    <section className="w-full min-h-[90vh] flex items-center justify-center p-4 relative overflow-hidden">
      <main className="w-full max-w-5xl flex flex-col items-center justify-center gap-8 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-white font-bold text-3xl uppercase text-center"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          O que você verá no dia 18 de Abril:
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="border border-white w-full max-w-2xl z-10 p-6 rounded-md overflow-auto text-white whitespace-normal leading-relaxed bg-white/8 backdrop-blur-md"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          <p>
            - O segredo para se manter atualizado em um mercado que muda o tempo
            todo
          </p>
          <p>
            - As estratégias testadas e comprovadas no campo de batalha que estão
            gerando muito resultado no digital nos últimos 6 meses
          </p>
          <p>
            - Inovações que estão ao seu alcance para acelerar o seu 6 em 7 ou a
            sua faixa preta
          </p>
          <p>
            - Os últimos hacks testados e comprovados no campo de batalha pelos
            nossos alunos Faixas Pretas.
          </p>
        </motion.div>
      </main>

      <motion.img
        src="/img/foguete-2.webp"
        alt=""
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute left-0 float-animation w-[30vw]"
      />
    </section>
  );
}

export default Sobre;
