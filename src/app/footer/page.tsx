"use client";
import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

function Footer() {
  return (
    <footer className="bg-[#0E0E0E] text-white px-5 py-10 font-sans">
      <div className="max-w-6xl mx-auto flex flex-wrap gap-10 justify-between">
        {[
          {
            title: "Sobre",
            content: (
              <p className="text-sm leading-relaxed">
                Somos a Ignição Digital, especialistas em estratégias de marketing
                digital, lançamentos e tecnologia.
              </p>
            ),
          },
          {
            title: "Contato",
            content: (
              <>
                <p className="text-sm">
                  Ignição Digital Tecnologia da Informação Ltda.
                </p>
                <p className="text-sm">CNPJ: 10.332.345/0001-04</p>
                <p className="text-sm">
                  Email:{" "}
                  <a
                    href="mailto:suporte@formuladelancamento.com.br"
                    className="hover:text-[#ff6600] transition"
                  >
                    suporte@formuladelancamento.com.br
                  </a>
                </p>
              </>
            ),
          },
          {
            title: "Redes Sociais",
            content: (
              <div className="flex gap-4 mt-2 text-white">
                <a
                  href="https://www.maratona6em7.com.br/teste-pagina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff6600] transition"
                >
                  <Facebook size={22} />
                </a>
                <a href="#" className="hover:text-[#ff6600] transition">
                  <Instagram size={22} />
                </a>
                <a href="#" className="hover:text-[#ff6600] transition">
                  <Youtube size={22} />
                </a>
                <a href="#" className="hover:text-[#ff6600] transition">
                  <Linkedin size={22} />
                </a>
              </div>
            ),
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex-1 min-w-[250px]"
          >
            <h4 className="text-[#ff6600] uppercase text-sm font-bold mb-3">
              {item.title}
            </h4>
            {item.content}
          </motion.div>
        ))}
      </div>

      {/* Direitos autorais animado */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-sm text-[#ccc] border-t border-[#222] mt-10 pt-4"
      >
        &copy; 2025 Ignição Digital. Todos os direitos reservados.
      </motion.div>
    </footer>
  );
}

export default Footer;
