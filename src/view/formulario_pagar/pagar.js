import { useState } from "react";
import { post } from "../../library/controler";

const PagarBd = () => {
  const [informacion, information] = useState({
    NombreEmpresa: "",
    NitEmpresa: "",
    MetdoPago: "",
    valorCompra: "",
    NumeroRadicado: 44444444,
  });

  const { NombreEmpresa, NitEmpresa, MetdoPago, valorCompra} =
    informacion;

  const obtenerDatos = () => {
    let url = "http://localhost:5000/pagos";
    const Data = {
      NombreEmpresa: informacion.NombreEmpresa,
      NitEmpresa: informacion.NitEmpresa,
      MetdoPago: informacion.MetdoPago,
      valorCompra: informacion.valorCompra,
      NumeroRadicado: informacion.NumeroRadicado,
    };

    post(url, Data);
  };
  const onchange = (e) => {
    information({
      ...informacion,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    obtenerDatos();
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
