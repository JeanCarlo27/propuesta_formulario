import "../components/ContecInfo.css";

export const ContecInfo = ({children}) => {
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
        {children}
      </div>
    </section>
  );
};
