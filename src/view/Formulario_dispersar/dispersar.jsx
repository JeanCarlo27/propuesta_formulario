import { useState } from "react";
import { getCompany, getUsers, putPetition } from "../../library/controler";

export const Dispersar = ({ info }) => {
  const [compra, setCompra] = useState(null);
  const idBd = info.idBd;
  const NitEmpresa = info.NitEmpresa;

  //empiesan los metodos que me consultaran y almacenaran informacion
  const consultaEmpresa = async (idBd, NitEmpresa) => {
      let url = `http://localhost:5000/pagos/?idBd=${idBd}&NitEmpresa=${NitEmpresa}`;
      const {Data} = getCompany(url)
      console.log(`esto es data ${Data}`);
      return Data
  };
  setCompra(consultaEmpresa(idBd, NitEmpresa));

  const consulta = (idBd) => {
    let url = `http://localhost:5000/usuarios/?idBd=${idBd}`;
    const  Data  = getUsers(url);
    enviarInformacion(Data, idBd);
  };
  //terminan los metodos que me consultan la informacion

  //estos son los metodos que me interactuan con la informacion ya consultada increase  
  const enviarInformacion = (Data, idBd) => {
    let url = `http://localhost:5000/usuarios/?idBd=${idBd}`;
    const data = Data?.map((item) => {
      if (item.billetera) {
        item.billetera += 800;
      }
      return data
    });
    putPetition(url, data);
  };
  //aca terminan los metodos que interactuan la informacion

  //es el controlador de que todos se ejecuen
  const onSubmit = (e) => {
    e.preventDefault();
    consulta();
    enviarInformacion();
  };

  const onchange = (e) => {
    console.log(e.target.value);
    if (e.target.value.length > 5) {
      return;
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="texto"
          className="input"
          name="NombreEmpresa"
          value={compra.NombreEmpresa}
          onChange={(e) => onchange(e)}
          disabled
        />
        <input
          type="text"
          className="input"
          name="NitEmpresa"
          value={compra.NitEmresa}
          onChange={onchange}
          disabled
        />
        <input
          type="text"
          className="input"
          name="valorCompra"
          value={compra.valorCompra}
          onChange={onchange}
          disabled
        />
        <input
          type="text"
          className="input"
          name="valorCompra"
          value={compra.NumeroRadicado}
          onChange={onchange}
          disabled
        />
        <button type="submit" className="button">
          dispersar
        </button>
      </form>
    </div>
  );
};

export default Dispersar;
