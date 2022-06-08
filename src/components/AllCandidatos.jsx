import axios from "axios";
import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";


const AllCandidatos = () => {

    const [candidatos, setCandidatos] = useState([]);

    useEffect( () => {
        axios.get("http://localhost:8000/api/candidatos/")
        .then(res => {
            setCandidatos(res.data.candidatos);
        })
        .catch(err => console.log(err));

    }, [])

    const eliminar = idProd => {
        axios.delete("http://localhost:8000/api/candidatos/delete/"+idProd)
            .then(res => {
                
                let nuevaListaProds = candidatos.filter(candidato => candidato._id !== idProd);
                setCandidatos(nuevaListaProds);
            })
    }
    console.log(candidatos);
    return (
            <div>
                <h1>
                    Elecciones Regionales y Municipales 2022: Candidatos
                </h1>
                <Link className="btn btn-success" to="/nuevo">Nuevo Candidato</Link>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Candidato</th>
                            <th>Partido:</th>
                            <th>Propuestas</th>
                            
                            <th>Acciones</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            candidatos.map((candidato, index) => (
                                <tr key={index}>
                                    <td>
                                        <img className="img-fluid" src={candidato.imagen} /> <br></br>
                                    </td>
                                    <td>{candidato.nombre}</td>
                                    <td>{candidato.partido}</td>
                                    <td>{candidato.perfil}</td>
                                    <td>
                                        <Link className="btn btn-primary" to={`/candidato/${candidato._id}`}>Detalle</Link>
                                        <Link className="btn btn-warning" to={`/candidato/edit/${candidato._id}`}>Editar</Link>
                                        <button className="btn btn-danger" onClick={() => eliminar(candidato._id)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

    )
    
}

export default AllCandidatos;