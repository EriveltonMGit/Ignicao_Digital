"use client";
import { motion } from "framer-motion";
import "../styles/globals.css";

function Sobre() {
  return (
    <section className="w-full min-h-[90vh] flex items-center justify-center p-4 relative overflow-hidden">
      <main className="w-full max-w-5xl flex flex-col items-center justify-center gap-4 md:gap-8 px-4">
        {/* Div do título - mesma largura e padding que a outra */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="border border-white w-full max-w-2xl z-10 p-4 md:p-6 rounded-md overflow-auto text-white whitespace-normal leading-relaxed bg-white/8 backdrop-blur-md text-xl md:text-2xl uppercase text-center font-bold"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          O que você verá no dia 18 de Abril:
        </motion.div>

        {/* Div do texto - mesma largura e padding que a outra */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="border border-white w-full max-w-2xl z-10 p-4 md:p-6 rounded-md overflow-auto text-white whitespace-normal leading-relaxed bg-white/8 backdrop-blur-md text-sm md:text-base min-h-[400px]"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          <p className="mb-2 md:mb-3">
            - O segredo para se manter atualizado em um mercado que muda o tempo
            todo
          </p>
          <p className="mb-2 md:mb-3">
            - As estratégias testadas e comprovadas no campo de batalha que
            estão gerando muito resultado no digital nos últimos 6 meses
          </p>
          <p className="mb-2 md:mb-3">
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
  whileInView={{ opacity: 0.7, x: 0 }} // aqui ajusta opacidade final
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: true }}
  className="
    absolute 
    bottom-[45vh] mr-0 z-[0] 
    md:bottom-auto md:right-0 md:top-auto md:z-auto
    float-animation 
    w-[90vw] md:w-[35vw]
  "
/>

    </section>
  );
}

export default Sobre;
