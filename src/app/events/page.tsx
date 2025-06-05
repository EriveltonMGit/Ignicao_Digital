"use client";
import { motion } from "framer-motion";
import { DollarSign, TrendingUp, Briefcase } from "lucide-react";
// Importação de toast não é mais necessária aqui
// import { toast } from "sonner"; 


const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

// A função handleClick e o toast foram removidos,
// pois a navegação será feita diretamente pelo href.
// const handleClick = () => {
//     toast.success("Inscrição confirmada com sucesso!");
// };

function Eventos() {
  return (
    <section className="w-full min-h-[90vh] flex flex-col items-center justify-center px-4 py-10 bg-[#0f0f0f] text-white font-sans text-center overflow-hidden">
      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {[
          {
            icon: <DollarSign className="text-orange-500 w-7 h-7" />,
            title: "Aspirantes a Empreendedor",
            text: "Ou seja, que tem o sonho de ser dono do próprio negócio e quer aprender a fazer isso do zero com segurança, baixo investimento e alta margem de lucro.",
          },
          {
            icon: <TrendingUp className="text-orange-500 w-7 h-7" />,
            title: "Empreendedores Convencionais",
            text: "Para quem já é dono do próprio negócio, seja um comércio ou um serviço e que quer aprender a usar a internet para escalar seu faturamento.",
          },
          {
            icon: <Briefcase className="text-orange-500 w-7 h-7" />,
            title: "Profissionais Liberais",
            text: "Para quem vive da hora trabalhada e quer aprender a lotar a agenda ou usar a internet para trabalhar menos e ganhar mais.",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="border border-orange-500 p-5 max-w-xs text-left rounded-lg bg-[#161616]"
          >
            <div className="flex items-center gap-3">
              {card.icon}
              <h3 className="text-sm font-bold uppercase">
                {card.title}
              </h3>
            </div>
            <hr className="border-t-2 border-orange-500 my-3" />
            <p className="text-sm leading-relaxed">
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Botão CTA */}
      <motion.a
        // O onClick foi removido, pois o href cuidará da navegação
        href="#inscricao" // Este href aponta para o ID da seção de formulário na HomePage
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="bg-orange-500 text-white font-bold py-3 px-6 rounded-md hover:bg-orange-600 transition w-full max-w-xs text-center text-sm md:text-base"
      >
        QUERO ME INSCREVER AGORA
      </motion.a>
    </section>
  );
}

export default Eventos;