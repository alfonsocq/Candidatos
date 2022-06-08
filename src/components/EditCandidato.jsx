import React, {useState, useEffect} from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const EditCandidato = () => {
    const {id} = useParams();
    const [candidatos, setCandidatos] = useState([]);
    const [nombre, setNombre] = useState("");
    const [imagen, setImagen] = useState("");
    const [partido, setPartido] = useState("");
    const [_id, setId] = useState("");
    const [perfil, setPerfil] = useState("");
    const [errors, setErrors] = useState({});
    const history = useHistory();

    useEffect( () => {

        axios.get("http://localhost:8000/api/candidatos/"+id)
            .then(res => {
                console.log(res.data.candidato);
                setNombre(res.data.candidato.nombre);
                setPartido(res.data.candidato.partido);
                setPerfil(res.data.candidato.imagen);
                setPerfil(res.data.candidato.perfil);
                setCandidatos(res.data.candidatoid);
                setId(res.data.candidato._id);
                console.log(candidatos);
                
            })
            .catch(err => console.log(err));

    }, [])

    useEffect( () => {
        axios.get("http://localhost:8000/api/candidatos/")
        .then(res => {
            setCandidatos(res.data.candidatos);
        })
        .catch(err => console.log(err));

    }, [])

    const editarCandidato = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/candidatos/edit/"+id, {
            nombre,
            partido,
            imagen,
            perfil
        })
            .then(res => history.push("/"))
            .catch(err => setErrors(err.response.data.errors));
    }
    const eliminar = idProd => {
        axios.delete("http://localhost:8000/api/candidatos/delete/"+idProd)

            .then(res => history.push("/"))
            .catch(err => setErrors(err.response.data.errors));
    }

    return (
        <div>
            <h1>Editar Candidato</h1>
            <form onSubmit={editarCandidato}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input id="nombre" name="nombre" type="text" className="form-control" value={nombre} onChange= {(e) => setNombre(e.target.value)} />
                    {errors.nombre ? <span className="text-danger">{errors.nombre.message}</span> : null}
                </div>
                <div className="col-6">
                            <label htmlFor="imagen">URL Imagen:</label>
                            <input type="text" id="imagen" name="imagen" value={imagen} onChange={(e) => setImagen(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="partido">Partido:</label>
                    <input id="partido" name="partido" type="number" className="form-control" value={partido} onChange= {(e) => setPartido(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="perfil">Descripción:</label>
                    <input id="perfil" name="perfil" type="text" className="form-control" value={perfil} onChange= {(e) => setPerfil(e.target.value)} />
                    {errors.perfil ? <span className="text-danger">{errors.perfil.message}</span> : null}
                </div>
                <input type="submit" className="btn btn-success" value="Guardar" />
                <button className="btn btn-danger" onClick={() => eliminar(_id)}>Eliminar</button>
            </form>
        </div>
    )

}

export default EditCandidato;