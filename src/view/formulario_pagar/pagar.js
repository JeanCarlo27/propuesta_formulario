import { useState } from "react";
import { contrler, post } from "../../library/controler";

const CrearCita = () => {

    const [informacion, information] = useState({
        NombreEmpresa: "",
        NitEmpresa: "",
        MetdoPago: "",
        valorCompra:"",
        NumeroRadicado: 44444444,
    });

    const obtenerDatos = () => {
        url= 'http://localhost:5000/pagos'
        const Data = {
            NombreEmpresa: informacion.NombreEmpresa,
            NitEmpresa: informacion.NitEmpresa,
            MetdoPago: informacion.MetdoPago,
            valorCompra: informacion.valorCompra,
            NumeroRadicado: informacion.NumeroRadicado
        }

        post(url,Data)
    }
    const onchange = (e) =>{
        information({
            ...informacion,
            [e.target.name]: e.target.value,
        })
    }
    obtenerDatos()
    return(<div>
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
            <input
            type="Number"
            className="radicado"
            placeholder="Numero de radicado"
            name="NumeroRadicado"
            value={NumeroRadicado}
            onChange={onchange}
            />
        </div>
        </form>
    </div>)
}

export default CrearCita;

