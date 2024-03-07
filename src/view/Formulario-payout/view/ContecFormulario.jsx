import "../view/ContecFormulario.css";
import IconVolver from "../../../assets/icon/icon_volver.svg";
import { useState } from "react";
export const ContecFormulario = () => {
  const [flag, setFlag] = useState("");
  const [numberCount, setNumberCount] = useState("");
  const [nomber, seNomber] = useState("");
  const [numDocument, setnumDocument] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const cantidadEnPesos = (e) => {
    const resultado = Number(e.target.value);
    if (!isNaN(resultado) && resultado !== 0) {
      setFlag(resultado);
      return;
    } else if (resultado === 0) {
      setFlag("");
    }
  };
  /*const numeroDeCuenta = (e) =>{
    const resultado = Number(e.target.value)
    if(!isNaN(resultado) && resultado !==0){
      setNumberCount(resultado)
      return;
    }else if(resultado === 0){
      setNumberCount("")
      return;
    }
  }*/

  const numeroDeCuenta = (e) =>{
    const resultado = e.target.value
    if(resultado.length > 0){
      if(resultado[resultado.length -1] > 0 || resultado === ""){
        setNumberCount(resultado)
      }
    }
  }

  return (
    <section className="contecFormulario">
      <div className="formulario">
        <div className="textos">
          <h3>Completa el formulario</h3>
          <p>
            Termina este proceso de registro y haz clic en "Finalizar y enviar"
          </p>
        </div>
        <div className="inputs">
          <div className="inputAndTexto">
            <input
              type="text"
              value={flag}
              placeholder="Cantidad (en pesos $)"
              onChange={(e) => cantidadEnPesos(e)}
              maxLength={10}
            />
            <p>*Solo puedes retirar tu dinero en múltiplos de 10</p>
          </div>
        </div>
        <div className="inputs">
          <input type="text" placeholder="Entidad bancaria" />
          <input
            type="text"
            value={numberCount}
            placeholder="No. Cuenta bancaria"
            onChange={(e) => numeroDeCuenta(e)}
            maxLength={24}
          />
        </div>
        <div className="inputs">
          <input type="text" placeholder="Nombre titular" />
          <input type="text" placeholder="Tipo de cuneta" />
        </div>
        <div className="inputs">
          <input type="text" placeholder="Tipo de documento" />
          <input type="text" placeholder="No. de documento" />
        </div>
        <div className="inputs">
          <input type="text" placeholder="Teléfono" />
          <input type="text" placeholder="Correo electrónico" />
        </div>
        <div className="botonInteraccion">
          <a href="/">
            <img src={IconVolver} alt="flechaVolver" />
            <span>volver</span>
          </a>
          <button>Finalizar y enviar</button>
        </div>
      </div>
    </section>
  );
};
