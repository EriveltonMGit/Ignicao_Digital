/* eslint-disable @next/next/no-img-element */

function FaixaRodape() {
  return (
    <section className="w-full h-[8vh] md:h-[10vh] flex items-center justify-center overflow-hidden z-[-1]">
      <img
        src="/img/linha.webp"
        alt="Decorative background line"
        className="w-full h-full object-cover min-h-[40px]"
      />
    </section>
  );
}

export default FaixaRodape;