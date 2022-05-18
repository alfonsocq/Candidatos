import {Link} from "react-router-dom";


const AllProducts = () => {

    return (
            <div>
                <h1>
                    Todos los productos
                </h1>
                <Link className="btn btn-success" to="/nuevo">Nuevo Producto</Link>
            </div>

    )
}

export default AllProducts;