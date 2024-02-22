export const getPetition = (url) => {
    try {
        fetch(url, {
            method: 'GET',
        })
        .then((Response)=> {
            if (Response.ok) {
                const Data = Response.json()
                return Data
            }else{
                throw new Error('no se pudo consultar la informacion')
            }
        })
    } catch (error) {
        throw new Error('no se pudo realizar la accion 55')
    }   
};
export const getCompañia = (url) => {
    try {
        fetch(url, {
            method: 'GET',
        })
        .then((Response)=> {
            if (Response.ok) {
                 const DATA = Response.json()
                return {DATA}
            }else{
                throw new Error('no se pudo consultar la informacion')
            }
        })
    } catch (error) {
        throw new Error('no se pudo realizar la accion 55')
    }
};


export const post = (url, Data) => {
  try {
    fetch(url, {
      method: "POST",
      body: JSON.stringify(Data),
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    throw new Error("la peticion no se pudo realizar");
  }
  console.error(Error);
};

export const putPetition = (url,data) =>{
    try {
        fetch(url, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        })
      } catch (error) {
        throw new Error("la peticion no se pudo realizar");
      }
      console.error(Error);
      console.log(data);
}