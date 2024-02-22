import { useState } from "react";
import { post } from "../../library/controler";
import { useNavigate } from "react-router-dom";
import Dispersar from "../Formulario_dispersar/Dispersar";

//hook para mantener control sobre os lementos que estan dentro del array
const PagarBd = () => {
  const [informacion, information] = useState({
    NombreEmpresa: "",
    idBd: 2,
    NitEmpresa: "",
    MetdoPago: "",
    valorCompra: "",
    NumeroRadicado: 44444444,
  });
  //variables donde contendre la informacion
  const { NombreEmpresa, NitEmpresa, MetdoPago, valorCompra } = informacion;

  //en esta parte envio la informacion para mi metodo post y dos datos para la vista dispersar
  const obtenerDatos = () => {
    let url = "http://localhost:5000/pagos";
    const Data = {
      NombreEmpresa: informacion.NombreEmpresa,
      idBd: informacion.idBd,
      NitEmpresa: informacion.NitEmpresa,
      MetdoPago: informacion.MetdoPago,
      valorCompra: informacion.valorCompra,
      NumeroRadicado: informacion.NumeroRadicado,
    };
    post(url, Data);
  };
  //lo utiloz para facilitar el renderizado de las paginas
  const navigate = useNavigate();
  //me controlara el cambio de las variables
  const onchange = (e) => {
    information({
      ...informacion,
      [e.target.name]: e.target.value,
    });
  };

  // el evento que me controlara que despues de enviar el formulario se active el evento
  const onSubmit = (e) => {
    e.preventDefault();
    obtenerDatos();
    padre();
    navigate("/dispersar");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="texto"
            className="nombre"
            placeholder="Nombre Empresa"
            name="NombreEmpresa"
            value={NombreEmpresa}
            onChange={onchange}
          />
          <input
            type="number"
            className="nit"
            placeholder="Nit de empresa"
            name="NitEmpresa"
            value={NitEmpresa}
            onChange={onchange}
          />
          <input
            type="tex"
            className="metodoPago"
            placeholder="Metodo de pago"
            name="MetdoPago"
            value={MetdoPago}
            onChange={onchange}
          />
          <input
            type="Number"
            className="valorCompra"
            placeholder="Valor de la compra"
            name="valorCompra"
            value={valorCompra}
            onChange={onchange}
          />
          <button type="submit" className="button">
            comprar
          </button>
        </div>
      </form>
    </div>
  );
};

export default PagarBd;
