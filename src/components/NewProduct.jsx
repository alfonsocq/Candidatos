import React, {useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";


const NewProduct = () =>{
    const [nombre, setNombre] = useState ("");
    const [precio, setPrecio] = useState ("");
    const [descripcion, setDescripcion] =useState ("");
    const [errors, setErrors] = useState({});
    const history = useHistory();

    const guardarProducto = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products/new", {
            nombre,
            precio,
            descripcion
        })
            .then(res => {
                console.log(res);
                history.push("/");
            })
            .catch( err => {
                setErrors(err.response.data.errors);
                console.log(err.response.data.errors);
            });
    }


    return(
        <div>
            <h1>Nuevo Producto</h1>
                <form onSubmit={guardarProducto}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input id="nombre" name="nombre" type="text" className="form-control" value={nombre} onChange= {(e) => setNombre(e.target.value)} />

                </div>
                <div className="form-group">
                    <label htmlFor="precio">Precio:</label>
                    <input id="precio" name="precio" type="number" className="form-control" value={precio} onChange= {(e) => setPrecio(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="descripcion">Descripción:</label>
                    <input id="descripcion" name="descripcion" type="text" className="form-control" value={descripcion} onChange= {(e) => setDescripcion(e.target.value)} />
  
                </div>
                <input type="submit" className="btn btn-success" value="Guardar" />
                </form>
        </div>
    )

}

export default NewProduct;