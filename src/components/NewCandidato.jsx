import React, {useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";


const NewProduct = () =>{
    const [nombre, setNombre] = useState ("");
    const [partido, setPartido] = useState ("");
    const [perfil, setPerfil] =useState ("");
    const [imagen, setImagen] =useState ("");
    const [errors, setErrors] = useState({});
    const history = useHistory();

    const guardarProducto = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/candidatos/new", {
            imagen,
            nombre,
            partido,
            perfil
        })
            .then(res => {
                console.log(res);
                history.push("/all");
            })
            .catch( err => {
                setErrors(err.response.data.errors);
                console.log(err.response.data.errors);
            });
    }


    return(
        <div>
            <h1>Nuevo Candidato</h1>
                <form onSubmit={guardarProducto}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input id="nombre" name="nombre" type="text" className="form-control" value={nombre} onChange= {(e) => setNombre(e.target.value)} />

                </div>
                <div className="form-group">
                    <label htmlFor="imagen">URL Imagen:</label>
                    <input type="text" id="imagen" name="imagen" value={imagen} onChange={(e) => setImagen(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="partido">Partido:</label>
                    <input id="partido" name="partido" type="text" className="form-control" value={partido} onChange= {(e) => setPartido(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="perfil">Descripción:</label>
                    <input id="perfil" name="perfil" type="text" className="form-control" value={perfil} onChange= {(e) => setPerfil(e.target.value)} />
  
                </div>
                <input type="submit" className="btn btn-success" value="Guardar" />
                </form>
        </div>
    )

}

export default NewProduct;