import { ContecInfo } from "./components/ContecInfo";
import { Nav } from "./components/Nav";
import "../Formulario-payout/FormularioPayout.css";
import { ContecFormulario } from "./view/ContecFormulario";

export const FormularioPayout = () => {
  return (
    <section className="container">
      <Nav />
      <ContecInfo>
        <ContecFormulario />
      </ContecInfo>
    </section>
  );
};
