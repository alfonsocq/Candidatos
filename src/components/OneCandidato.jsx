import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const OneCandidato = () => {
    const {id} = useParams();
    const [candidato, setCandidato] = useState({});

    useEffect(() => {

        axios.get("http://localhost:8000/api/candidatos/"+id)
            .then(res => {
                console.log(res.data.candidato);
                setCandidato(res.data.candidato);
                
            })
            .catch(err => console.log(err));

    }, [])
    
    return(
        <div className="card">
            <h2>{candidato.nombre}</h2>
            <h2>{candidato.precio}</h2>
            <h2>{candidato.descripcion}</h2>
            <Link to="/" className="btn btn-primary">Regresar a Home</Link>
        </div>
    )
     
}
export default OneCandidato;