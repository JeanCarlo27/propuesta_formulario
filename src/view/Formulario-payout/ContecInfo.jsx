import iconInfoPrincipal from "../../assets/icon/icon_info-principal.svg";
import "../Formulario-payout/ContecInfo.css";

export const ContecInfo = () => {
  return (
    <section className="contec">
      {/*contendra todos los elementos disponibles ademas de llevar mi color base*/}
      <div className="contecInformacion">
        {/*es mi contenedor secundario de informacion*/}
        <div className="historialPagos">
          {/*me contendra el link a Historaial de pagos*/}
          <div className="linkHistorialDePagos">
            <a href="/">Historial de pagos</a>
          </div>
        </div>
        <div className="botonBilletra">
          <button>
            <img src={iconInfoPrincipal} alt="" />
          </button>
          {/*es el boton que me redirijira al carrusel de imagenes con las obciones de billetera*/}
        </div>
      </div>
    </section>
  );
};
