import Footer from "../components/footer";
import Inicio from "../components/Inicio";
import SectionAbout from "../components/s-about"
import SectionProject from "../components/s-project";
import SectionServicos from "../components/s-servicos";


export default function Home() {
  return (
    <>
      <Inicio /> 
      <SectionAbout />
      <SectionServicos />
      <SectionProject />
      <Footer />
    </>
  );
}
