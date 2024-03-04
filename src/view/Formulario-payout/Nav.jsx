import "../Formulario-payout/Nav.css";
import tudatapremiumHuella from "../../assets/img/tudatapremiumHuella.png";
import iconEmpresas from "../../assets/icon/icon_empresas.svg";
import iconBilletera from "../../assets/icon/icon_billetera.svg";
import iconAjustes from "../../assets/icon/icon_ajustes.svg";
import iconCerrar from "../../assets/icon/icon_cerrar.svg";
import iconPremium from "../../assets/icon/icon_tudata_premium.png";
export const Nav = () => {
  return (
    <section>
      <div className="contecInfo">
        {/* es el contenedor que me contiene todo el menu de navegacion*/}
        <div className="contecOptions">
          <div className="namePlan">
            <img src={iconPremium} alt="logoPrimium" />
          </div>
          {/*este contenedor me contiene el logo de tu data premium*/}
          <div className="grupItem ">
            {/*contiene las redirecciones a las vistas*/}
            <div className="item">
              {/*es un contenedor padre que lo manejare en los contenedores de las vistas*/}
              <div className="selection">
                {/*manejara el tamaño estandar de todos los items que me redireccionara a las vistas NOTA:tambien es contenedor general*/}
                <a href="/">
                  <img src={tudatapremiumHuella} alt="" />
                  <div className="texto">Cuenta</div>
                  {/*contiene nombre de la vista correspondiende a donde se dirigira*/}
                </a>
              </div>
            </div>
            <div className="item">
              <div className="selection">
                <a href="/">
                  <img src={iconEmpresas} alt="" />
                  <div className="texto">Empresas</div>
                  {/*contiene nombre de la vista correspondiende a donde se dirigira*/}
                </a>
              </div>
            </div>
            <div className="item">
              <div className="selection">
                <a href="/">
                  <img src={iconBilletera} alt="" />
                  <div className="texto">Bolsillo</div>
                  {/*contiene nombre de la vista correspondiende a donde se dirigira*/}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="contecActionButtons">
          {/*este contenedor manejara el tamaño general de los botones de interaccion*/}
          <div className="ajustes">
            {/*me contendra el item que me redirigira al boton de ajustes*/}
            <div className="selection">
              <a href="/">
                <img src={iconAjustes} alt="" />
                <div className="texto">Ajustes</div>
              </a>
            </div>
          </div>
          <div className="logup">
            {/*contiene que me cerra la secion*/}
            <a href="/">
              <img src={iconCerrar} alt="" />
              <div className="cerrar">Cerrar sesión</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
