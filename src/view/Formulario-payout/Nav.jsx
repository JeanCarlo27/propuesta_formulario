import "../Formulario-payout/Nav.css";
export const Nav = () => {
  return (
    <section>
      <div className="contecInfo">
        <div className="namePlan">logo</div>
        <div className="contecOptions">
          <div>
            <a href="/">
              <img src="" alt="" /> <span>Cuenta</span>
            </a>
          </div>
          <div>
            <a href="/">
              <img src="" alt="" /> <span>Empresas</span>
            </a>
          </div>
          <div>
            <a href="/">
              <img src="" alt="" />
              <span>Bolsillo</span>
            </a>
          </div>
        </div>
        <div className="contecActionButtons">
          <div>
            <a href="/">
              <img src="" alt="" />
              <span>Ajustes</span>{" "}
            </a>
          </div>
          <div>
            <a href="/">
              <img src="" alt="" />
              <span>Cerrar sesión</span>{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
