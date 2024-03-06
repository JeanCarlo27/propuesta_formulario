import "../view/ContecFormulario.css";
import IconVolver from "../../../assets/icon/icon_volver.svg";
export const ContecFormulario = () => {
  return (
    <section className="contecFormulario">
      <div className="formulario">
        <div className="textos"><h3>Completa el formulario</h3>
        <p>
          Termina este proceso de registro y haz clic en "Finalizar y enviar"
        </p></div>
        <div className="inputs">
            <div className="inputAndTexto"><input type="text"  placeholder="Cantidad (en pesos $)"/>
          <p>*Solo puedes retirar tu dinero en múltiplos de 10</p>
          </div>
        </div>
        <div className="inputs">
          <input type="text"  placeholder="Entidad bancaria"/>
          <input type="text"  placeholder="No. Cuenta bancaria"/>
        </div>
        <div className="inputs">
          <input type="text" placeholder="Nombre titular"/>
          <input type="text" placeholder="Tipo de cuneta"/>
        </div>
        <div className="inputs">
          <input type="text" placeholder="Tipo de documento"/>
          <input type="text" placeholder="No. de documento"/>
        </div>
        <div className="inputs">
          <input type="text" placeholder="Teléfono"/>
          <input type="text" placeholder="Correo electrónico"/>
        </div>
        <div className="botonInteraccion">
          <a href="/"><img src={IconVolver} alt="flechaVolver" /><span>volver</span></a>
          <button>Finalizar y enviar</button>
        </div>
      </div>
    </section>
  );
};
