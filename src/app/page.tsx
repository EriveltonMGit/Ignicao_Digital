import Sobre from "./aboult/page";
import FaixaRodape from "./components/ui/faixa";
import Descricao from "./description/page";
import Eventos from "./events/page";
import Footer from "./footer/page";
import HomePage from "./home/page";

export default function Home() {
  return (
    <>
      <HomePage></HomePage>
      <FaixaRodape></FaixaRodape>
      <Sobre></Sobre>
      <Descricao></Descricao>
      <Eventos></Eventos>
      <Footer></Footer>
    </>
  );
}
